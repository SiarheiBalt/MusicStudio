import {
  CLEAR_CHOSEN_DAY_INSTRUMENT,
  CLEAR_INSTRUMENT_SERVER_STATUS,
  GET_CHOSEN_DAY_INSTRUMENT,
  GET_CHOSEN_DAY_INSTRUMENTS_SUCCES,
  GET_INSTRUMENTS,
  GET_INSTRUMENTS_SUCCES,
  RESERVE_INSTRUMENT,
  RESERVE_INSTRUMENT_SUCCES,
  SET_RESERVE_INSTRUMENTS_ERROR,
} from '../constants';
import { getDateInfo } from '../../utils/date';

const defaultState = {
  instruments: null,
  chosenDay: null,
  serverMessage: null,
  error: null,
};

const reserveInstruments = (state = defaultState, action) => {
  switch (action.type) {
    case GET_INSTRUMENTS:
      return state;
    case GET_INSTRUMENTS_SUCCES: {
      const instruments = action.data.map((instrument) => {
        instrument.dates = instrument.dates.map((day) => {
          const { date, dayofWeek, monthName, month, year } = getDateInfo(
            day.date
          );
          const changedDay = day;
          changedDay.dayofWeek = dayofWeek;
          changedDay.monthName = monthName;
          changedDay.month = month;
          changedDay.year = year;
          changedDay.date = date;
          return changedDay;
        });
        return instrument;
      });
      return { ...state, instruments };
    }

    case GET_CHOSEN_DAY_INSTRUMENT:
      return { ...state };

    case GET_CHOSEN_DAY_INSTRUMENTS_SUCCES:
      let chosenDay = getDateInfo(action.day.date);
      chosenDay.reserveTime = action.day.reserveTime;
      chosenDay.id = action.day.id;
      return { ...state, chosenDay };

    case RESERVE_INSTRUMENT:
      return state;

    case RESERVE_INSTRUMENT_SUCCES:
      const message = action.message;
      return { ...state, serverMessage: message };

    case SET_RESERVE_INSTRUMENTS_ERROR: {
      const message = action.message;
      return { ...state, error: message };
    }

    case CLEAR_INSTRUMENT_SERVER_STATUS:
      return { ...state, serverMessage: null, error: null };

    case CLEAR_CHOSEN_DAY_INSTRUMENT:
      return {
        ...state,
        chosenDay: null,
      };

    default:
      return state;
  }
};

export default reserveInstruments;
