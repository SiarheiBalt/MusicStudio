import createData from '../../utils/date';
import { ACTIONS } from '../constants';

const defaultState = {
  instruments: [
    {
      dates: createData(),
      specifications: { type: 'Гитара', name: 'Fender Stratocaster' },
      image: '/instrumentImages/guitar.jpg',
      instrumentId: Math.random().toString(36).substr(2, 9),
    },
    {
      dates: createData(),
      specifications: { type: 'Басс гитара', name: 'Fender JazzBass' },
      image: '/instrumentImages/bassGuitar.jpg',
      instrumentId: Math.random().toString(36).substr(2, 9),
    },
    {
      dates: createData(),
      specifications: { type: 'Гитара', name: 'Gibson SG' },
      image: '/instrumentImages/gibsonSG.jpg',
      instrumentId: Math.random().toString(36).substr(2, 9),
    },
    {
      dates: createData(),
      specifications: { type: 'Акустическая гитара', name: 'Epiphone' },
      image: '/instrumentImages/acusticGuitar.jpg',
      instrumentId: Math.random().toString(36).substr(2, 9),
    },
    {
      dates: createData(),
      specifications: { type: 'Барабаны', name: 'Yamaha' },
      image: '/instrumentImages/drums.jpg',
      instrumentId: Math.random().toString(36).substr(2, 9),
    },
  ],
};

const reserveInstruments = (state = defaultState, action) => {
  switch (action.type) {
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
