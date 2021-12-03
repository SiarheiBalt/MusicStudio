import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTIONS } from '../constants';
import { getUserLocalStorage } from '../../utils/localStorage';

function* getUserOrdersSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.formData;
      body = JSON.stringify(body);
      let headers = {};
      const method = 'POST';
      headers['Content-type'] = 'application/json';
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

function* getCancelAdminOrderSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.formData;
      body = JSON.stringify(body);
      let headers = {};
      const method = 'POST';
      headers['Content-type'] = 'application/json';
      return fetch('/api/orders/del', {
        method,
        body,
        headers,
      });
    });

    if (response.status === 200) {
      yield put({ type: ACTIONS.CANCEL_ORDER_IN_USER_ADMIN_SUCCES });
      const { userId, token } = getUserLocalStorage();
      const formData = {
        userId,
        auth: token,
      };

      yield put({ type: ACTIONS.GET_ALL_ORDERS, formData });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* cancelAdminOrderSaga() {
  yield takeEvery(ACTIONS.CANCEL_ORDER_IN_USER_ADMIN, getCancelAdminOrderSaga);
}
