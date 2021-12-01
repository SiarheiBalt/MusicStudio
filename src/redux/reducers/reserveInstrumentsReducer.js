import { ACTIONS } from '../constants';
import { getDateInfo } from '../../utils/date';

const defaultState = {
  instruments: null,
  chosenDay: null,
  serverMessage: null,
  error: null,
};

const reserveInstruments = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.GET_INSTRUMENTS:
      return state;
    case ACTIONS.GET_INSTRUMENTS_SUCCES: {
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

    case ACTIONS.GET_CHOSEN_DAY_INSTRUMENT:
      return { ...state };

    case ACTIONS.GET_CHOSEN_DAY_INSTRUMENTS_SUCCES:
      let chosenDay = getDateInfo(action.day.date);
      chosenDay.reserveTime = action.day.reserveTime;
      chosenDay.id = action.day.id;
      return { ...state, chosenDay };

    case ACTIONS.RESERVE_INSTRUMENT:
      return state;

    case ACTIONS.RESERVE_INSTRUMENT_SUCCES:
      const message = action.message;
      return { ...state, serverMessage: message };

    case ACTIONS.SET_RESERVE_INSTRUMENTS_ERROR: {
      const message = action.message;
      return { ...state, error: message };
    }

    case ACTIONS.CLEAR_INSTRUMENT_SERVER_STATUS:
      return { ...state, serverMessage: null, error: null };

    case ACTIONS.CLEAR_CHOSEN_DAY_INSTRUMENT:
      return {
        ...state,
        chosenDay: null,
      };

    default:
      return state;
  }
};

export default reserveInstruments;
