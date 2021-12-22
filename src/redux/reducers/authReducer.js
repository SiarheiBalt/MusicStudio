import {
  checkUserLocalStorage,
  cleanUserLocalStorage,
  getUserLocalStorage,
  setUserLocalStorage,
} from './../../utils/localStorage';

import {
  CLEAN_AUTH_ERROR_MESSAGE,
  CANCEL_ORDER_IN_USER,
  CANCEL_ORDER_IN_USER_SUCCES,
  ADD_ORDER_IN_USER,
  DELL_ORDER_IN_USER,
  REGISTRATION_USER,
  LOGIN_USER,
  SET_USER,
  DEFINE_USER,
  LOGOUT_USER,
  SET_USER_ERROR,
  REGISTRATION_USER_SUCCES,
  GET_USER_ORDERS,
  GET_USER_ORDERS_SUCCES,
} from '../constants';

import { getTimeNow } from '../../utils/date';

let defaultState = {
  user: null,
  isAuth: false,
  error: null,
  registrationMessage: null,
  orderedServices: [],
  isAdmin: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CANCEL_ORDER_IN_USER:
      return { ...state };
    case CANCEL_ORDER_IN_USER_SUCCES:
      return { ...state };
    case ADD_ORDER_IN_USER:
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
    case DELL_ORDER_IN_USER:
      const orderId = action.orderId;
      const orderedServices = state.orderedServices.filter((order) => {
        return orderId !== order.orderId;
      });

      return { ...state, orderedServices };
    case REGISTRATION_USER:
      return { ...state };
    case LOGIN_USER:
      return state;
    case SET_USER:
      const isAdmin = action.data.role === 'admin';
      setUserLocalStorage(action.data);
      return {
        ...state,
        isAuth: true,
        user: action.data.name,
        error: null,
        isAdmin,
      };
    case DEFINE_USER: {
      if (checkUserLocalStorage()) {
        const user = getUserLocalStorage();
        const isAdmin = user.role === 'admin';
        return { ...state, isAuth: true, user: user.name, isAdmin };
      }
      return state;
    }
    case LOGOUT_USER: {
      cleanUserLocalStorage();
      const isAdmin = false;
      return { ...state, isAuth: false, user: null, isAdmin };
    }
    case SET_USER_ERROR:
      return { ...state, error: action.errorText };

    case REGISTRATION_USER_SUCCES:
      return { ...state, registrationMessage: action.message };
    case CLEAN_AUTH_ERROR_MESSAGE:
      return { ...state, registrationMessage: null, error: null };
    case GET_USER_ORDERS:
      return { ...state };
    case GET_USER_ORDERS_SUCCES:
      return { ...state, orderedServices: action.orders };
    default:
      return state;
  }
};

export default authReducer;
