import { getDateInfo } from '../../utils/date';
import {
  GET_RECORDS_SUCCES,
  GET_RECORDS,
  GET_DAY_IN_RECORD_SUCCES,
  GET_DAY_IN_RECORD,
  CLEAR_CHOSEN_DAY,
  RESERVE_RECORD,
  RESERVE_RECORD_SUCCES,
  SET_RESERVE_RECORDS_ERROR,
  CLEAR_RECORD_SERVER_STATUS,
  RESERVE_RECORD_CANCEL,
} from '../constants';

const defaultState = {
  records: null,
  chosenDay: null,
  serverMessage: null,
  error: null,
};

const reserveRecord = (state = defaultState, action) => {
  switch (action.type) {
    case GET_RECORDS_SUCCES: {
      const records = action.data.map((record) => {
        record.dates = record.dates.map((day) => {
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
        return record;
      });
      return { ...state, records };
    }
    case GET_RECORDS: {
      return { ...state };
    }
    case GET_DAY_IN_RECORD_SUCCES: {
      let chosenDay = getDateInfo(action.day.date);
      chosenDay.reserveTime = action.day.reserveTime;
      chosenDay.id = action.day.id;

      return { ...state, chosenDay };
    }
    case GET_DAY_IN_RECORD: {
      return { ...state };
    }
    case CLEAR_CHOSEN_DAY: {
      return { ...state, chosenDay: null };
    }
    case RESERVE_RECORD: {
      return { ...state };
    }
    case RESERVE_RECORD_SUCCES: {
      const message = action.message;
      return { ...state, serverMessage: message };
    }
    case SET_RESERVE_RECORDS_ERROR: {
      const message = action.message;
      return { ...state, error: message };
    }
    case CLEAR_RECORD_SERVER_STATUS: {
      return { ...state, serverMessage: null, error: null };
    }
    case RESERVE_RECORD_CANCEL: {
      const dayId = action.formData.dayId;
      const reserveTime = action.formData.reservedTime;

      const record = state.record.map((typeRecord) => {
        typeRecord.dates = typeRecord.dates.map((day) => {
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
        return typeRecord;
      });

      return {
        ...state,
        record,
      };
    }
    default:
      return state;
  }
};

export default reserveRecord;
