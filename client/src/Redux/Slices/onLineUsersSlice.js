import { createSlice } from '@reduxjs/toolkit';

const onlineUsersSlice = createSlice({
  name: 'onlineUsers',
  initialState: [],
  reducers: {
    setOnLineUsers(state, action) {
      return action.payload;
    },
  },
});

export const { setOnLineUsers } = onlineUsersSlice.actions;
export default onlineUsersSlice.reducer;
