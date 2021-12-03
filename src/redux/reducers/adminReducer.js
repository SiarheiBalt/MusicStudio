import { ACTIONS } from '../constants';

let defaultState = {
  orders: [],
};

const adminReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.GET_ALL_ORDERS:
      return { ...state };
    case ACTIONS.GET_ALL_ORDERS_SUCCES:
      return { ...state, orders: action.data };
    case ACTIONS.CANCEL_ORDER_IN_USER_ADMIN:
      return { ...state };
    case ACTIONS.CANCEL_ORDER_IN_USER_ADMIN_SUCCES:
      return { ...state };

    default:
      return state;
  }
};

export default adminReducer;
