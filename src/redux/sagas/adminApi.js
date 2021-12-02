import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTIONS } from '../constants';

function* getUserOrdersSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.formData;
      body = JSON.stringify(body);
      let headers = {};
      const method = 'POST';
      headers['Content-type'] = 'application/json'; // указываю что передаю json
      return fetch('/api/admin/orders', {
        method,
        body,
        headers,
      });
    });

    const data = yield response.json();
    if (response.ok) {
      yield put({
        type: ACTIONS.GET_ALL_ORDERS_SUCCES,
        data,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* userOrdersSagaAdmin() {
  yield takeEvery(ACTIONS.GET_ALL_ORDERS, getUserOrdersSaga);
}
