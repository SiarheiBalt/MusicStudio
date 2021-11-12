import {
  checkUserLocalStorage,
  cleanUserLocalStorage,
  getUserLocalStorage,
  setUserLocalStorage,
} from './../../utils/localStorage';
import { ACTIONS } from '../constants';
import { getTimeNow } from '../../utils/date';

let defaultState = {
  user: null,
  isAuth: false,
  error: null,
  registrationMessage: null,
  orderedServices: [],
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ORDER_IN_USER:
      const data = {
        type: action.formData.itemInfo.type,
        name: action.formData.itemInfo.name,
        dayId: action.formData.resrveDate.id,
        reservedTime: action.formData.selectedTime,
        date: {
          date: action.formData.resrveDate.date,
          monthName: action.formData.resrveDate.monthName,
        },
        orderId: Math.random().toString(36).substr(2, 9),
        actionTime: getTimeNow(),
      };
      return { ...state, orderedServices: [...state.orderedServices, data] };
    case ACTIONS.DELL_ORDER_IN_USER:
      const orderId = action.orderId;
      const orderedServices = state.orderedServices.filter((order) => {
        return orderId !== order.orderId;
      });

      return { ...state, orderedServices };
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
