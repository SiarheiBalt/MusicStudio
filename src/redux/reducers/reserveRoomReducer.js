import { createData } from '../../utils/date';
import { getUserLocalStorage } from '../../utils/localStorage';
import { ACTIONS } from '../constants';

const defaultState = {
  rooms: [
    {
      dates: createData(),
      name: 'big',
      id: Math.random().toString(36).substr(2, 9),
    },
    {
      dates: createData(),
      name: 'small',
      id: Math.random().toString(36).substr(2, 9),
    },
  ],
};

const reserveRoom = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.RESERVE_ROOM:
      const dayId = action.formData.resrveDate.id;
      const reserveTime = action.formData.selectedTime;

      const rooms = state.rooms.map((room) => {
        room.dates = room.dates.map((day) => {
          if (dayId === day.id) {
            day.reserveTime = day.reserveTime.map((hourInfo) => {
              const hour = hourInfo.hour;
              const findHour = reserveTime.some((el) => el === hour);
              if (findHour) {
                hourInfo.isFree = false;
                hourInfo.customer = getUserLocalStorage();
              }
              return hourInfo;
            });
          }
          return day;
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

export default reserveRoom;
