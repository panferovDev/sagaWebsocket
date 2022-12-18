import { all } from 'redux-saga/effects';
import WebSocketWatcher from './wsSaga';

export default function* rootSaga() {
  yield all([
    WebSocketWatcher(),
  ]);
}
