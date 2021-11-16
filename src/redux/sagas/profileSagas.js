import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTIONS } from '../constants';

function* getUserOrdersSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.formData;
      body = JSON.stringify(body);
      let headers = {};
      const method = 'POST';
      headers['Content-type'] = 'application/json';
      return fetch('/api/orders/all', {
        method,
        body,
        headers,
      });
    });

    const data = yield response.json();
    if (response.status === 500) {
      yield put({ type: ACTIONS.SET_USER_ERROR, errorText: data.message });
    }
    if (response.ok) {
      yield put({
        type: ACTIONS.GET_USER_ORDERS_SUCCES,
        orders: data,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* userOrdersSaga() {
  yield takeEvery(ACTIONS.GET_USER_ORDERS, getUserOrdersSaga);
}
