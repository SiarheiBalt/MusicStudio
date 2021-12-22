import { getDateInfo } from '../../utils/date';

import {
  GET_ROOMS_SUCCES,
  GET_ROOMS,
  GET_DAY_IN_ROOM_SUCCES,
  GET_DAY_IN_ROOM,
  CLEAR_CHOSEN_DAY,
  RESERVE_ROOM,
  RESERVE_ROOM_SUCCES,
  SET_RESERVE_ROOM_ERROR,
  CLEAR_ROOM_SERVER_STATUS,
  RESERVE_ROOM_CANCEL,
} from '../constants';

const defaultState = {
  rooms: null,
  chosenDay: null,
  serverMessage: null,
  error: null,
};

const reserveRoom = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ROOMS_SUCCES: {
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
    case GET_ROOMS: {
      return { ...state };
    }
    case GET_DAY_IN_ROOM_SUCCES: {
      let chosenDay = getDateInfo(action.day.date);
      chosenDay.reserveTime = action.day.reserveTime;
      chosenDay.id = action.day.id;

      return { ...state, chosenDay };
    }
    case GET_DAY_IN_ROOM: {
      return { ...state };
    }
    case CLEAR_CHOSEN_DAY: {
      return { ...state, chosenDay: null };
    }
    case RESERVE_ROOM: {
      return { ...state };
    }
    case RESERVE_ROOM_SUCCES: {
      const message = action.message;
      return { ...state, serverMessage: message };
    }
    case SET_RESERVE_ROOM_ERROR: {
      const message = action.message;
      return { ...state, error: message };
    }
    case CLEAR_ROOM_SERVER_STATUS: {
      return { ...state, serverMessage: null, error: null };
    }
    case RESERVE_ROOM_CANCEL: {
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
