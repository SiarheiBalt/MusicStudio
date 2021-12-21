import { takeEvery, call, put } from 'redux-saga/effects';
import {
  GET_RECORDS_SUCCES,
  GET_RECORDS,
  GET_DAY_IN_RECORD_SUCCES,
  GET_DAY_IN_RECORD,
  RESERVE_RECORD_SUCCES,
  SET_RESERVE_RECORDS_ERROR,
  RESERVE_RECORD,
} from '../constants';

function* getAllRecordsSaga() {
  try {
    const response = yield call(() => {
      const url = '/api/records/all';
      return fetch(url);
    });

    const data = yield response.json();
    if (response.ok) {
      yield put({
        type: GET_RECORDS_SUCCES,
        data,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* allRecordsSaga() {
  yield takeEvery(GET_RECORDS, getAllRecordsSaga);
}

function* getDayInRecordSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.data;
      body = JSON.stringify(body);
      const method = 'POST';
      const url = '/api/records/dates';
      return fetch(url, {
        method,
        body,
        headers: { 'content-type': 'application/json' },
      });
    });
    const data = yield response.json();
    const day = yield data[0].dates[0];
    if (response.status === 200) {
      yield put({ type: GET_DAY_IN_RECORD_SUCCES, day });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* dayInRecordSaga() {
  yield takeEvery(GET_DAY_IN_RECORD, getDayInRecordSaga);
}

function* getReserveRecordSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.formData;
      body = JSON.stringify(body);
      const method = 'POST';
      return fetch('/api/records/time', {
        method,
        body,
        headers: { 'content-type': 'application/json' },
      });
    });

    const data = yield response.json();
    const message = data.message;
    if (response.status === 201) {
      const message = 'Время зарезервировано';
      yield put({ type: GET_DAY_IN_RECORD, data: action.formData });
      yield put({ type: RESERVE_RECORD_SUCCES, message });
    } else {
      yield put({ type: SET_RESERVE_RECORDS_ERROR, message });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* reserveRecordSaga() {
  yield takeEvery(RESERVE_RECORD, getReserveRecordSaga);
}
