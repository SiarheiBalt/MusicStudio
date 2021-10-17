import {
  checkUserLocalStorage,
  cleanUserLocalStorage,
  getUserLocalStorage,
  setUserLocalStorage,
} from '../../functions/localStorage';
import { ACTIONS } from '../constants';

let defaultState = {
  user: null,
  isAuth: false,
  error: null,
  registrationMessage: null,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.REGISTRATION_USER:
      return { ...state };
    case ACTIONS.LOGIN_USER:
      return state;
    case ACTIONS.SET_USER:
      setUserLocalStorage(action.data);
      return { ...state, isAuth: true, user: action.data.name, error: null };
    case ACTIONS.DEFINE_USER:
      if (checkUserLocalStorage()) {
        const user = getUserLocalStorage();
        return { ...state, isAuth: true, user: user.name };
      }
      return state;
    case ACTIONS.LOGOUT_USER:
      cleanUserLocalStorage();
      return { ...state, isAuth: false, user: null };

    case ACTIONS.SET_USER_ERROR:
      return { ...state, error: action.errorText };

    case ACTIONS.REGISTRATION_USER_SUCCES:
      return { ...state, registrationMessage: action.message };
    case ACTIONS.CLEAN_AUTH_ERROR_MESSAGE:
      return { ...state, registrationMessage: null, error: null };
    default:
      return state;
  }
};

export default authReducer;