import { call, put, takeLatest } from 'redux-saga/effects';
import {
  ADD_DATA_REQUEST,
  ADD_DATA_SUCCESS,
  ADD_DATA_FAILED,
  READ_DATA_REQUEST,
  READ_DATA_FAILED,
  READ_DATA_SUCCESS
} from './types';
import { fs } from '../config';

function addData(payload) {
  return fs
    .collection('feedback')
    .add({
      response: payload
    })
    .then(docRef => docRef.id)
    .catch(error => {
      throw error;
    });
}

async function readData() {
  return fs
    .collection('feedback')
    .get()
    .then(snapshot => snapshot.docs.map(doc => doc.data()))
    .catch(error => {
      throw error;
    });
}

function* addDataRequest(action) {
  try {
    const { payload } = action;
    const response = yield call(addData, payload);
    yield put({ type: ADD_DATA_SUCCESS, response });
    yield;
  } catch (error) {
    yield put({ type: ADD_DATA_FAILED, error });
  }
}

function* readDataRequest() {
  try {
    const response = yield call(readData);
    yield put({ type: READ_DATA_SUCCESS, response });
  } catch (error) {
    yield put({ type: READ_DATA_FAILED, error });
  }
}

function* actionWatcher() {
  yield takeLatest(ADD_DATA_REQUEST, addDataRequest);
  yield takeLatest(READ_DATA_REQUEST, readDataRequest);
}

export default actionWatcher;
