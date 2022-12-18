import { createSlice } from '@reduxjs/toolkit';

const onlineSlice = createSlice({
  name: 'online',
  initialState: false,
  reducers: {
    setOnLine(state, action) {
      return action.payload;
    },
  },
});

export const { setOnLine } = onlineSlice.actions;
export default onlineSlice.reducer;
