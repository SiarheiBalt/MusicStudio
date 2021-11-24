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

function* getDayInstrumentsSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.formData;
      body = JSON.stringify(body);
      const method = 'POST';
      let headers = {};
      headers['Content-type'] = 'application/json';

      const url = '/api/instruments/dates';
      return fetch(url, {
        method,
        body,
        headers,
      });
    });
    const data = yield response.json();
    const day = yield data[0].dates[0];

    if (response.status === 200) {
      yield put({ type: ACTIONS.GET_CHOSEN_DAY_INSTRUMENTS_SUCCES, day });
    }
  } catch (error) {
    console.log(error);
  }
}
export function* dayInstrumentsSaga() {
  yield takeEvery(ACTIONS.GET_CHOSEN_DAY_INSTRUMENT, getDayInstrumentsSaga);
}

function* getReserveInstrumentSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.formData;
      body = JSON.stringify(body);
      let headers = {};
      const method = 'POST';
      headers['Content-type'] = 'application/json';
      return fetch('/api/instruments/time', {
        method,
        body,
        headers,
      });
    });

    const data = yield response.json();
    const message = data.message;
    if (response.status === 201) {
      console.log(response.status);
      const message = 'Время зарезервировано';
      yield put({
        type: ACTIONS.GET_CHOSEN_DAY_INSTRUMENT,
        formData: action.formData,
      });
      yield put({ type: ACTIONS.RESERVE_INSTRUMENT_SUCCES, message });
    } else {
      yield put({ type: ACTIONS.SET_RESERVE_INSTRUMENTS_ERROR, message });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* reserveInstrumentSaga() {
  yield takeEvery(ACTIONS.RESERVE_INSTRUMENT, getReserveInstrumentSaga);
}
