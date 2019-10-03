import { call, put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_RUNS,
  RUNS_RECEIVED,
  RUNS_ERROR,
  FETCH_MATCH_RUNS,
  MATCH_RUNS_ERROR,
  MATCH_RUNS_RECEIVED,
  FETCH_TIME_DATA,
  TIME_DATA_RECEIVED,
  TIME_DATA_ERROR,
  FETCH_BAR_DATA,
  BAR_DATA_RECEIVED,
  BAR_DATA_ERROR,
  FETCH_BATSMEN,
  BATSMEN_FAILED,
  BATSMEN_RECEIVED
} from './types';

function fetchRuns(payload) {
  return fetch('/api/runs/' + payload)
    .then(response => response.json())
    .then(json => json)
    .catch(error => {
      throw error;
    });
}

function fetchMatchRuns(payload) {
  return fetch('/api/pieData/' + payload)
    .then(response => response.json())
    .then(json => json)
    .catch(error => {
      throw error;
    });
}

function fetchTimeData(payload) {
  return fetch('/api/timeSeries/' + payload)
    .then(response => response.json())
    .then(json => JSON.stringify(json.data))
    .catch(error => {
      throw error;
    });
}

function* fetchFlowRuns(action) {
  try {
    const { payload } = action;
    const response = yield call(fetchRuns, payload);
    yield put({ type: RUNS_RECEIVED, response: response.data });
  } catch (error) {
    yield put({ type: RUNS_ERROR, error });
  }
}

function fetchBarData(payload) {
  return fetch('/api/match/' + payload)
    .then(response => response.json())
    .then(json => json)
    .catch(error => {
      throw error;
    });
}

function fetchBatsmen() {
  return fetch('/api/batsmen')
    .then(response => response.json())
    .then(json => json)
    .catch(error => {
      throw error;
    });
}

function* fetchFlowMatchRuns(action) {
  try {
    const { payload } = action;
    const response = yield call(fetchMatchRuns, payload);
    yield put({ type: MATCH_RUNS_RECEIVED, response: response.data });
  } catch (error) {
    yield put({ type: MATCH_RUNS_ERROR, error });
  }
}

function* fetchFlowTimeData(action) {
  try {
    const { payload, labelValue } = action;
    const response = yield call(fetchTimeData, payload);
    yield put({
      type: TIME_DATA_RECEIVED,
      response: JSON.parse(response),
      labelVal: labelValue
    });
  } catch (error) {
    yield put({ type: TIME_DATA_ERROR, error });
  }
}

function* fetchFlowBarData(action) {
  try {
    const { payload } = action;
    const response = yield call(fetchBarData, payload);
    yield put({ type: BAR_DATA_RECEIVED, response: response.data });
  } catch (error) {
    yield put({ type: BAR_DATA_ERROR, error });
  }
}

function* fetchFlowBatsmen() {
  try {
    const response = yield call(fetchBatsmen);
    yield put({ type: BATSMEN_RECEIVED, response: response.data });
  } catch (error) {
    yield put({ type: BATSMEN_FAILED, error });
  }
}

function* actionWatcher() {
  yield takeLatest(FETCH_RUNS, fetchFlowRuns);
  yield takeLatest(FETCH_MATCH_RUNS, fetchFlowMatchRuns);
  yield takeLatest(FETCH_TIME_DATA, fetchFlowTimeData);
  yield takeLatest(FETCH_BAR_DATA, fetchFlowBarData);
  yield takeLatest(FETCH_BATSMEN, fetchFlowBatsmen);
}

export default actionWatcher;
