import { takeEvery, call } from 'redux-saga/effects';
import { ACTIONS } from '../constants';

function* getRegistrationUserSaga(action) {
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
