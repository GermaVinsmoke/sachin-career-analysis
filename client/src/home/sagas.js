import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects';
import {
    FETCH_INFO,
    INFO_RECEIVED,
    INFO_ERROR
} from './types';

function fetchInfo() {
    return fetch('/api/basic')
        .then(response => response.json())
        .then(json => json)
        .catch(error => {
            throw error;
        });
}

function* fetchFlowInfo() {
    try {
        const response = yield call(fetchInfo);
        yield put({
            type: INFO_RECEIVED,
            response
        });
    } catch (error) {
        yield put({
            type: INFO_ERROR,
            error
        });
    }
}

function* actionWatcher() {
    yield takeLatest(FETCH_INFO, fetchFlowInfo);
}

export default actionWatcher;