require('dotenv').config();
const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const http = require('http');
const { WebSocketServer } = require('ws');
const userRouter = require('./routes/userRouter');
const codeRouter = require('./routes/codeRouter');

const PORT = process.env.PORT || 3005;

const app = express();

app.locals.ws = new Map();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  credentials: true,
  origin: true,
}));

const sessionParser = session({
  name: 'sid',
  store: new FileStore({}),
  secret: 'jdkjelkwjelk',
  saveUninitialized: false,
  resave: false,
  cookie: {
    expires: 24 * 60 * 60e3,
    httpOnly: true,
  },
});
app.use(sessionParser);

app.use('/api/auth', userRouter);
app.use('/api/code', codeRouter);

const server = http.createServer(app);

const wss = new WebSocketServer({ clientTracking: false, noServer: true });

// authPart
server.on('upgrade', (request, socket, head) => {
  console.log('Parsing session from request...');

  sessionParser(request, {}, () => {
    if (!request.session.user) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }

    console.log('Session is parsed!');

    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  });
});

wss.on('connection', (ws, request) => {
  const { id } = request.session.user;

  app.locals.ws.set(id, { ws, user: request.session.user });

  for (const [, wsClient] of app.locals.ws) {
    wsClient.ws.send(JSON.stringify(
      { type: 'ONLINE_USERS', payload: Array.from(app.locals.ws.values()).map((el) => el.user) },
    ));
  }

  ws.on('message', async (message) => {
    console.log(JSON.parse(message));
    const { type, payload } = JSON.parse(message);
    switch (type) {
      case 'ENTER_ROOM':
        app.locals.ws.set(id, { ws, user: request.session.user, room: Number(payload) });
        break;

      default:
        break;
    }
  });

  ws.on('close', () => {
    app.locals.ws.delete(id);
    for (const [, wsClient] of app.locals.ws) {
      wsClient.ws.send(JSON.stringify(
        { type: 'ONLINE_USERS', payload: Array.from(app.locals.ws.values()).map((el) => el.user) },
      ));
    }
  });
});

server.listen(PORT, () => {
  console.log('server start on port ', PORT);
});
