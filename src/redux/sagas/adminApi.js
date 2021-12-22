import { takeEvery, call, put } from 'redux-saga/effects';

import {
  GET_ALL_ORDERS_SUCCES,
  GET_ALL_ORDERS,
  CANCEL_ORDER_IN_USER_ADMIN_SUCCES,
  CANCEL_ORDER_IN_USER_ADMIN,
} from '../constants';

import { getUserLocalStorage } from '../../utils/localStorage';

function* getUserOrdersSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.formData;
      body = JSON.stringify(body);
      const method = 'POST';
      return fetch('/api/admin/orders', {
        method,
        body,
        headers: { 'content-type': 'application/json' },
      });
    });
    const data = yield response.json();

    if (response.ok) {
      yield put({
        type: GET_ALL_ORDERS_SUCCES,
        data,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* userOrdersSagaAdmin() {
  yield takeEvery(GET_ALL_ORDERS, getUserOrdersSaga);
}

function* getCancelAdminOrderSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.formData;
      body = JSON.stringify(body);
      const method = 'POST';
      return fetch('/api/orders/del', {
        method,
        body,
        headers: { 'content-type': 'application/json' },
      });
    });

    if (response.status === 200) {
      yield put({ type: CANCEL_ORDER_IN_USER_ADMIN_SUCCES });
      const { userId, token } = getUserLocalStorage();
      const formData = {
        userId,
        auth: token,
      };

      yield put({ type: GET_ALL_ORDERS, formData });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* cancelAdminOrderSaga() {
  yield takeEvery(CANCEL_ORDER_IN_USER_ADMIN, getCancelAdminOrderSaga);
}
