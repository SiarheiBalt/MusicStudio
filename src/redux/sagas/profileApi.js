import { takeEvery, call, put } from 'redux-saga/effects';
import { getUserLocalStorage } from '../../utils/localStorage';
import {
  SET_USER_ERROR,
  GET_USER_ORDERS_SUCCES,
  GET_USER_ORDERS,
  CANCEL_ORDER_IN_USER_SUCCES,
  CANCEL_ORDER_IN_USER,
} from '../constants';

function* getUserOrdersSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.formData;
      body = JSON.stringify(body);
      const method = 'POST';
      return fetch('/api/orders/all', {
        method,
        body,
        headers: { 'content-type': 'application/json' },
      });
    });
    const data = yield response.json();

    if (response.status === 500) {
      yield put({ type: SET_USER_ERROR, errorText: data.message });
    }
    if (response.ok) {
      yield put({
        type: GET_USER_ORDERS_SUCCES,
        orders: data,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* userOrdersSaga() {
  yield takeEvery(GET_USER_ORDERS, getUserOrdersSaga);
}

function* getCancelUserOrderSaga(action) {
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
      yield put({ type: CANCEL_ORDER_IN_USER_SUCCES });
      const { userId, token } = getUserLocalStorage();
      const formData = {
        userId,
        auth: token,
      };
      yield put({ type: GET_USER_ORDERS, formData });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* cancelUserOrderSaga() {
  yield takeEvery(CANCEL_ORDER_IN_USER, getCancelUserOrderSaga);
}
