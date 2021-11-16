import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTIONS } from '../constants';

function* getAllRecordsSaga() {
  try {
    const response = yield call(() => {
      const url = '/api/records/all';
      return fetch(url);
    });

    const data = yield response.json();
    if (response.ok) {
      yield put({
        type: ACTIONS.GET_RECORDS_SUCCES,
        data,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* allRecordsSaga() {
  yield takeEvery(ACTIONS.GET_RECORDS, getAllRecordsSaga);
}

function* getDayInRecordSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.data;
      body = JSON.stringify(body);
      const method = 'POST';
      let headers = {};
      headers['Content-type'] = 'application/json';

      const url = '/api/records/dates';
      return fetch(url, {
        method,
        body,
        headers,
      });
    });
    const data = yield response.json();
    const day = yield data[0].dates[0];
    if (response.status === 200) {
      yield put({ type: ACTIONS.GET_DAY_IN_RECORD_SUCCES, day });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* dayInRecordSaga() {
  yield takeEvery(ACTIONS.GET_DAY_IN_RECORD, getDayInRecordSaga);
}

function* getReserveRecordSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.formData;

      body = JSON.stringify(body);
      let headers = {};
      const method = 'POST';
      headers['Content-type'] = 'application/json';
      return fetch('/api/records/time', {
        method,
        body,
        headers,
      });
    });

    const data = yield response.json();
    const message = data.message;
    if (response.status === 201) {
      const message = 'Время зарезервировано';
      yield put({ type: ACTIONS.GET_DAY_IN_RECORD, data: action.formData });
      yield put({ type: ACTIONS.RESERVE_RECORD_SUCCES, message });
    } else {
      yield put({ type: ACTIONS.SET_RESERVE_RECORDS_ERROR, message });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* reserveRecordSaga() {
  yield takeEvery(ACTIONS.RESERVE_RECORD, getReserveRecordSaga);
}
