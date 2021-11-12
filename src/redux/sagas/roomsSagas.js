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

function* getRoomSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.body;
      body = JSON.stringify(body);
      const method = 'POST';
      let headers = {};
      headers['Content-type'] = 'application/json';

      const url = '/api/rooms/all';
      return fetch(url, {
        method,
        body,
        headers,
      });
    });
  } catch (error) {}
}

export function* roomSaga() {
  yield takeEvery(ACTIONS.GET_DATES_IN_ROOM, getRoomSaga);
}
