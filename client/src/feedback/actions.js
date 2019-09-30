import { ADD_DATA_REQUEST, READ_DATA_REQUEST } from './types';

export const addData = payload => ({
  type: ADD_DATA_REQUEST,
  payload
});

export const readData = () => ({
  type: READ_DATA_REQUEST
});
