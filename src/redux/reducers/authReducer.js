import { ACTIONS } from '../constants';

let defaultState = {
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.REGISTRATION_USER:
      return state;

    default:
      return state;
  }
};

export default authReducer;
