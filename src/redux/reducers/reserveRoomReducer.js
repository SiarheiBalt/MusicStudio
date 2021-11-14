import { getDateInfo } from '../../utils/date';
import { getUserLocalStorage } from '../../utils/localStorage';
import { ACTIONS } from '../constants';

const defaultState = {
  rooms: null,
  chosenDay: null,
};

const reserveRoom = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.GET_ROOMS_SUCCES: {
      const rooms = action.data.map((room) => {
        room.dates = room.dates.map((day) => {
          let { date, dayofWeek, monthName, month, year } = getDateInfo(
            day.date
          );
          day.dayofWeek = dayofWeek;
          day.monthName = monthName;
          day.month = month;
          day.year = year;
          day.date = date;
          return day;
        });
        return room;
      });
      return { ...state, rooms };
    }
    case ACTIONS.GET_ROOMS: {
      return { ...state };
    }
    case ACTIONS.GET_DAY_IN_ROOM_SUCCES: {
      let chosenDay = getDateInfo(action.day.date);
      chosenDay.reserveTime = action.day.reserveTime;
      chosenDay.id = action.day.id;

      return { ...state, chosenDay };
    }
    case ACTIONS.GET_DAY_IN_ROOM: {
      return { ...state };
    }

    case ACTIONS.RESERVE_ROOM: {
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
    }
    case ACTIONS.RESERVE_ROOM_CANCEL: {
      const dayId = action.formData.dayId;
      const reserveTime = action.formData.reservedTime;

      const rooms = state.rooms.map((room) => {
        room.dates = room.dates.map((day) => {
          if (dayId === day.id) {
            day.reserveTime = day.reserveTime.map((hourInfo) => {
              const hour = hourInfo.hour;
              const findHour = reserveTime.some((el) => el === hour);
              if (findHour) {
                hourInfo.isFree = true;
                hourInfo.customer = null;
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
    }
    default:
      return state;
  }
};

export default reserveRoom;
