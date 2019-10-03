import { call, put, takeLatest } from 'redux-saga/effects';
import {
  ADD_DATA_REQUEST,
  ADD_DATA_SUCCESS,
  ADD_DATA_FAILED,
  READ_DATA_REQUEST,
  READ_DATA_FAILED,
  READ_DATA_SUCCESS
} from './types';

function addData(payload) {
  let res = { response: payload };
  return fetch('/api/feedback/response/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(res)
  })
    .then(response => response.json())
    .then(json => json)
    .catch(error => {
      throw error;
    });
}

async function readData() {
  return fetch('/api/feedback')
    .then(response => response.json())
    .then(json => json)
    .catch(error => {
      throw error;
    });
}

function* addDataRequest(action) {
  try {
    const { payload } = action;
    const response = yield call(addData, payload);
    yield put({ type: ADD_DATA_SUCCESS, response: response.data });
    yield;
  } catch (error) {
    yield put({ type: ADD_DATA_FAILED, error });
  }
}

function* readDataRequest() {
  try {
    const response = yield call(readData);
    yield put({ type: READ_DATA_SUCCESS, response: response.result });
  } catch (error) {
    yield put({ type: READ_DATA_FAILED, error });
  }
}

function* actionWatcher() {
  yield takeLatest(ADD_DATA_REQUEST, addDataRequest);
  yield takeLatest(READ_DATA_REQUEST, readDataRequest);
}

export default actionWatcher;
