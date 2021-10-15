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
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.REGISTRATION_USER:
      return { ...state };
    case ACTIONS.LOGIN_USER:
      return state;
    case ACTIONS.SET_USER:
      setUserLocalStorage(action.data);
      return { ...state, isAuth: true, user: action.data.name };
    case ACTIONS.DEFINE_USER:
      if (checkUserLocalStorage()) {
        const user = getUserLocalStorage();
        return { ...state, isAuth: true, user: user.name };
      }
    case ACTIONS.LOGOUT_USER:
      cleanUserLocalStorage();
      return { ...state, isAuth: false, user: null };

    default:
      return state;
  }
};

export default authReducer;
