import { configureStore } from '@reduxjs/toolkit';
import onlineSlice from './Slices/onlineSlice';
import onLineUsersSlice from './Slices/onLineUsersSlice';
import userSlice from './Slices/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    online: onlineSlice,
    onLineUsers: onLineUsersSlice,
  },
});
export default store;
