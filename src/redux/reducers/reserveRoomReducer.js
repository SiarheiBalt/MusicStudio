import createData from '../../functions/date';
import { ACTIONS } from '../constants';

const defaultState = {
  rooms: {
    big: createData(),
    small: createData(),
  },
};

const reserveRoomReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.RESERVE_ROOM:
      const date = action.formData.resrveDate.getDate();
      const month = action.formData.resrveDate.getMonth();

      const roomArray = state.rooms[action.formData.size];

      roomArray.map((day) => {
        if (day.date === date && day.month === month) {
          const reserveTime = day.reserveTime[action.formData.selectedTime];
        }
      });

    default:
      return state;
  }
};

export default reserveRoomReducer;
