// import { ACTIONS } from '../constants';

import { ACTIONS } from '../constants';

let defaultState = {
  orders: null,
};

const adminReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.GET_ALL_ORDERS:
      return { ...state };
    case ACTIONS.GET_ALL_ORDERS_SUCCES:
      return { ...state, orders: action.data };

    default:
      return state;
  }
};

export default adminReducer;
