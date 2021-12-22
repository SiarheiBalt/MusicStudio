import {
  GET_ALL_ORDERS,
  GET_ALL_ORDERS_SUCCES,
  CANCEL_ORDER_IN_USER_ADMIN,
  CANCEL_ORDER_IN_USER_ADMIN_SUCCES,
} from '../constants';

let defaultState = {
  orders: [],
};

const adminReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return { ...state };
    case GET_ALL_ORDERS_SUCCES:
      return { ...state, orders: action.data };
    case CANCEL_ORDER_IN_USER_ADMIN:
      return { ...state };
    case CANCEL_ORDER_IN_USER_ADMIN_SUCCES:
      return { ...state };

    default:
      return state;
  }
};

export default adminReducer;
