import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTIONS } from '../constants';

function* getRegistrationUserSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.body;
      body = JSON.stringify(body);
      let headers = {};
      const method = 'POST';
      headers['Content-type'] = 'application/json'; // указываю что передаю json
      return fetch('/api/auth/register', {
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
      const message = 'Пользователь создан';
      yield put({
        type: ACTIONS.REGISTRATION_USER_SUCCES,
        message,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* registrationUserSaga() {
  yield takeEvery(ACTIONS.REGISTRATION_USER, getRegistrationUserSaga);
}
function* getLoginUserSaga(action) {
  try {
    const response = yield call(() => {
      let body = action.body;

      body = JSON.stringify(body);
      let headers = {};
      const method = 'POST';
      headers['Content-type'] = 'application/json'; // указываю что передаю json
      return fetch('/api/auth/login', {
        method,
        body,
        headers,
      });
    });
    const data = yield response.json();
    if (response.status === 200) {
      yield put({ type: ACTIONS.SET_USER, data });
    } else {
      const errorText = 'Неверный логин или пароль';
      yield put({ type: ACTIONS.SET_USER_ERROR, errorText });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* loginUserSaga() {
  yield takeEvery(ACTIONS.LOGIN_USER, getLoginUserSaga);
}
