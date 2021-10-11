import createData from '../../functions/date';
import { ACTIONS } from '../constants';

const defaultState = {
  rooms: [
    { dates: createData(), name: 'big' },
    { dates: createData(), name: 'small' },
  ],
};

const reserveRoomReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.RESERVE_ROOM:
      const date = action.formData.resrveDate.getDate();
      const month = action.formData.resrveDate.getMonth();
      const selectedTime = action.formData.selectedTime;
      const size = action.formData.size;
      let rooms = state.rooms.concat();

      rooms = rooms.map((room) => {
        room.dates = room.dates.map((element) => {
          if (
            element.date === date &&
            element.month === month &&
            room.name === size
          ) {
            const obj = { isfree: false };
            element.reserveTime[selectedTime] = obj;
          }
          return element;
        });
        return room;
      });

      return {
        ...state,
        rooms,
      };

    default:
      return state;
  }
};

export default reserveRoomReducer;
