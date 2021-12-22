import { takeEvery, call, put } from 'redux-saga/effects';

import {
  SET_USER_ERROR,
  REGISTRATION_USER_SUCCES,
  SET_USER,
} from '../constants';

import { LOGIN_USER } from '../constants';
import { REGISTRATION_USER } from '../constants';

function* getRegistrationUserSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.body;
      body = JSON.stringify(body);
      const method = 'POST';
      return fetch('/api/auth/register', {
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
      const message = 'Пользователь создан';
      yield put({
        type: REGISTRATION_USER_SUCCES,
        message,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* registrationUserSaga() {
  yield takeEvery(REGISTRATION_USER, getRegistrationUserSaga);
}
function* getLoginUserSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.body;

      body = JSON.stringify(body);
      const method = 'POST';
      return fetch('/api/auth/login', {
        method,
        body,
        headers: { 'content-type': 'application/json' },
      });
    });
    const data = yield response.json();
    if (response.status === 200) {
      yield put({ type: SET_USER, data });
    } else {
      const errorText = 'Неверный логин или пароль';
      yield put({ type: SET_USER_ERROR, errorText });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* loginUserSaga() {
  yield takeEvery(LOGIN_USER, getLoginUserSaga);
}
