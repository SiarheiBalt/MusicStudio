import { takeEvery, call, put } from 'redux-saga/effects';

import {
  GET_ROOMS,
  GET_DAY_IN_ROOM_SUCCES,
  GET_DAY_IN_ROOM,
  RESERVE_ROOM_SUCCES,
  SET_RESERVE_ROOM_ERROR,
  RESERVE_ROOM,
  GET_ROOMS_SUCCES,
} from '../constants';

function* getAllRoomsSaga() {
  try {
    const response = yield call(() => {
      const url = '/api/rooms/all';
      return fetch(url);
    });

    const data = yield response.json();
    if (response.ok) {
      yield put({
        type: GET_ROOMS_SUCCES,
        data,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* allRoomsSaga() {
  yield takeEvery(GET_ROOMS, getAllRoomsSaga);
}

function* getDayInRoomSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.data;
      body = JSON.stringify(body);
      const method = 'POST';
      const url = '/api/rooms/dates';
      return fetch(url, {
        method,
        body,
        headers: { 'content-type': 'application/json' },
      });
    });
    const data = yield response.json();
    const day = yield data[0].dates[0];
    if (response.status === 200) {
      yield put({ type: GET_DAY_IN_ROOM_SUCCES, day });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* dayInRoomSaga() {
  yield takeEvery(GET_DAY_IN_ROOM, getDayInRoomSaga);
}

function* getReserveRoomSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.formData;
      body = JSON.stringify(body);
      const method = 'POST';
      return fetch('/api/rooms/time', {
        method,
        body,
        headers: { 'content-type': 'application/json' },
      });
    });

    const data = yield response.json();
    const message = data.message;
    if (response.status === 201) {
      const message = 'Время зарезервировано';
      yield put({ type: GET_DAY_IN_ROOM, data: action.formData });
      yield put({ type: RESERVE_ROOM_SUCCES, message });
    } else {
      yield put({ type: SET_RESERVE_ROOM_ERROR, message });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* reserveRoomSaga() {
  yield takeEvery(RESERVE_ROOM, getReserveRoomSaga);
}
