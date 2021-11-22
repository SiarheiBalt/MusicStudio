import { createData } from '../../utils/date';
import { ACTIONS } from '../constants';

const defaultState = {
  instruments: null,
};

const reserveInstruments = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.GET_INSTRUMENTS:
      return state;
    case ACTIONS.GET_INSTRUMENTS_SUCCES:
      return { ...state, instruments: action.data };

    case ACTIONS.RESERVE_INSTRUMENT:
      const dayId = action.data.day.id;
      const instrumentId = action.data.id;
      const selectedHours = action.data.selectedHours;

      const instruments = state.instruments.map((instrument) => {
        if (instrument.instrumentId === instrumentId) {
          instrument.dates = instrument.dates.map((day) => {
            if (day.id === dayId) {
              day.reserveTime = day.reserveTime.map((time) => {
                const hour = time.hour;
                if (selectedHours.some((el) => el === hour)) {
                  time.isFree = false;
                }
                return time;
              });
            }
            return day;
          });
        }
        return instrument;
      });

      return {
        ...state,
        instruments,
      };
    default:
      return state;
  }
};

export default reserveInstruments;
