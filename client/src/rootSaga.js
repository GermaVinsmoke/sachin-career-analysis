import { all } from 'redux-saga/effects';
import homeSaga from './home/sagas';
import statsSaga from './stats/sagas';
import feedbackSaga from './feedback/sagas';

export default function* rootSaga() {
  yield all([homeSaga(), statsSaga(), feedbackSaga()]);
}
