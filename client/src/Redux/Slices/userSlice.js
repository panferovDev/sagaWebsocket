import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
  name: 'user',
  initialState: { isFetching: true },
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

export const checkUser = () => (dispatch) => {
  axios.post('/api/auth/check')
    .then((res) => dispatch(setUser(res.data)))
    .catch((err) => dispatch(setUser({})));
};

export const signIn = (inputs) => (dispatch) => {
  axios.post('/api/auth/signin', inputs)
    .then((res) => dispatch(setUser(res.data)))
    .catch((err) => dispatch(setUser({})));
};

export const signUp = (inputs) => (dispatch) => {
  axios.post('/api/auth/signup', inputs)
    .then((res) => dispatch(setUser(res.data)))
    .catch((err) => dispatch(setUser({})));
};

export const logout = () => (dispatch) => {
  axios('/api/auth/logout')
    .then((res) => dispatch(setUser({})))
    .catch((err) => dispatch(setUser({})));
};
