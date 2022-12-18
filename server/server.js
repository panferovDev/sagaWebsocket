require('dotenv').config();
const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const userRouter = require('./routes/userRouter');

const PORT = process.env.PORT || 3005;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  credentials: true,
  origin: true,
}));

app.use(session({
  name: 'sid',
  store: new FileStore({}),
  secret: 'jdkjelkwjelk',
  saveUninitialized: false,
  resave: false,
  cookie: {
    expires: 24 * 60 * 60e3,
    httpOnly: true,
  },
}));

app.use('/api/auth', userRouter);

app.listen(PORT, () => {
  console.log('server start on port ', PORT);
});
