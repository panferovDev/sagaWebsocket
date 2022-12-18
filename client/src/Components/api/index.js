import axios from 'axios';

export const createCode = () => axios.post('/api/code');

export const getUserCodes = () => axios('/api/code');

export const getCode = (id) => axios(`/api/code/${id}`);

export const submitCode = (code) => axios.patch(`/api/code/${code.id}`, { code });
