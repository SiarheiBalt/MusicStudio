import createData from '../../functions/date';
import { ACTIONS } from '../constants';

const defaultState = {
  rooms: {
    big: createData(),
    small: createData(),
  },
};

const reserveTimeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.GET_TIME_DATA:
      console.log('111111111');

    default:
      return state;
  }
};

export default reserveTimeReducer;
