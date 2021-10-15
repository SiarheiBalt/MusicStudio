import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTIONS } from '../constants';

function* getRegistrationUserSaga(action) {
  try {
    const response = yield call(() => {
      let body = {
        password: action.userData.password,
        email: action.userData.email,
        name: action.userData.name,
      };
      console.log(body);
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
    console.log(response);
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
      let body = {
        password: action.userData.password,
        email: action.userData.email,
      };

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
    yield put({ type: ACTIONS.SET_USER, data });
  } catch (error) {
    console.log(error);
  }
}

export function* loginUserSaga() {
  yield takeEvery(ACTIONS.LOGIN_USER, getLoginUserSaga);
}
