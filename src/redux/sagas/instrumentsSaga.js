import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTIONS } from '../constants';

function* getInstrumentsSaga() {
  try {
    const response = yield call(() => {
      const url = '/api/instruments/all';
      return fetch(url);
    });

    const data = yield response.json();
    if (response.ok) {
      yield put({
        type: ACTIONS.GET_INSTRUMENTS_SUCCES,
        data,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* instrumentsSaga() {
  yield takeEvery(ACTIONS.GET_INSTRUMENTS, getInstrumentsSaga);
}
