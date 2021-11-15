import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTIONS } from '../constants';

function* getAllRoomsSaga() {
  try {
    const response = yield call(() => {
      const url = '/api/rooms/all';
      return fetch(url);
    });

    const data = yield response.json();
    if (response.ok) {
      yield put({
        type: ACTIONS.GET_ROOMS_SUCCES,
        data,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* allRoomsSaga() {
  yield takeEvery(ACTIONS.GET_ROOMS, getAllRoomsSaga);
}

function* getDayInRoomSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.data;
      body = JSON.stringify(body);
      const method = 'POST';
      let headers = {};
      headers['Content-type'] = 'application/json';

      const url = '/api/rooms/dates';
      return fetch(url, {
        method,
        body,
        headers,
      });
    });
    const data = yield response.json();
    const day = yield data[0].dates[0];
    if (response.status === 200) {
      yield put({ type: ACTIONS.GET_DAY_IN_ROOM_SUCCES, day });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* dayInRoomSaga() {
  yield takeEvery(ACTIONS.GET_DAY_IN_ROOM, getDayInRoomSaga);
}

function* getReserveRoomSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.formData;

      body = JSON.stringify(body);
      let headers = {};
      const method = 'POST';
      headers['Content-type'] = 'application/json';
      return fetch('/api/rooms/time', {
        method,
        body,
        headers,
      });
    });

    const data = yield response.json();
    const message = data.message;
    if (response.status === 201) {
      yield put({ type: ACTIONS.GET_DAY_IN_ROOM, data: action.formData });
      yield put({ type: ACTIONS.RESERVE_ROOM_SUCCES, message });
    } else {
      yield put({ type: ACTIONS.SET_RESERVE_ROOM_ERROR, message });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* reserveRoomSaga() {
  yield takeEvery(ACTIONS.RESERVE_ROOM, getReserveRoomSaga);
}
