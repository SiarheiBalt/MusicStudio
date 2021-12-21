import { takeEvery, call, put } from 'redux-saga/effects';

import {
  GET_CHOSEN_DAY_INSTRUMENT,
  GET_CHOSEN_DAY_INSTRUMENTS_SUCCES,
  GET_INSTRUMENTS,
  GET_INSTRUMENTS_SUCCES,
  RESERVE_INSTRUMENT,
  RESERVE_INSTRUMENT_SUCCES,
  SET_RESERVE_INSTRUMENTS_ERROR,
} from '../constants';

function* getInstrumentsSaga() {
  try {
    const response = yield call(() => {
      const url = '/api/instruments/all';
      return fetch(url);
    });

    const data = yield response.json();
    if (response.ok) {
      yield put({
        type: GET_INSTRUMENTS_SUCCES,
        data,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* instrumentsSaga() {
  yield takeEvery(GET_INSTRUMENTS, getInstrumentsSaga);
}

function* getDayInstrumentsSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.formData;
      body = JSON.stringify(body);
      const method = 'POST';
      const url = '/api/instruments/dates';
      return fetch(url, {
        method,
        body,
        headers: { 'content-type': 'application/json' },
      });
    });
    const data = yield response.json();
    const day = yield data[0].dates[0];

    if (response.status === 200) {
      yield put({ type: GET_CHOSEN_DAY_INSTRUMENTS_SUCCES, day });
    }
  } catch (error) {
    console.log(error);
  }
}
export function* dayInstrumentsSaga() {
  yield takeEvery(GET_CHOSEN_DAY_INSTRUMENT, getDayInstrumentsSaga);
}

function* getReserveInstrumentSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.formData;
      body = JSON.stringify(body);
      const method = 'POST';
      return fetch('/api/instruments/time', {
        method,
        body,
        headers: { 'content-type': 'application/json' },
      });
    });
    const data = yield response.json();
    const message = data.message;
    if (response.status === 201) {
      const message = 'Время зарезервировано';
      yield put({
        type: GET_CHOSEN_DAY_INSTRUMENT,
        formData: action.formData,
      });
      yield put({ type: RESERVE_INSTRUMENT_SUCCES, message });
    } else {
      yield put({ type: SET_RESERVE_INSTRUMENTS_ERROR, message });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* reserveInstrumentSaga() {
  yield takeEvery(RESERVE_INSTRUMENT, getReserveInstrumentSaga);
}
