import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Sagas/rootSaga';
import onlineSlice from './Slices/onlineSlice';
import onLineUsersSlice from './Slices/onLineUsersSlice';
import userSlice from './Slices/userSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userSlice,
    online: onlineSlice,
    onLineUsers: onLineUsersSlice,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export default store;
