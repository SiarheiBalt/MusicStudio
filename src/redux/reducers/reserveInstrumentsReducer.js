import createData from '../../utils/date';
import { ACTIONS } from '../constants';

const defaultState = {
  instruments: [
    {
      dates: createData(),
      name: 'Fender Stratocaster SRV',
      specifications: [
        'электро-гитара',
        'USA Corona California',
        '2005 года выпуска',
      ],
      image: '/instrumentImages/guitar.jpg',
      instrumentId: Math.random().toString(36).substr(2, 9),
    },
    {
      dates: createData(),
      name: 'Fender JazzBass',
      specifications: ['басс гитара', '4 струны', 'made in Japan'],
      image: '/instrumentImages/bassGuitar.jpg',
      instrumentId: Math.random().toString(36).substr(2, 9),
    },
    {
      dates: createData(),
      name: 'Gibson SG Standart',
      specifications: ['электро-гитара', 'USA 2006'],
      image: '/instrumentImages/gibsonSG.jpg',
      instrumentId: Math.random().toString(36).substr(2, 9),
    },
    {
      dates: createData(),
      name: 'Epiphone',
      specifications: ['акустическая гитара', 'made in Korea'],
      image: '/instrumentImages/acusticGuitar.jpg',
      instrumentId: Math.random().toString(36).substr(2, 9),
    },
    {
      dates: createData(),
      name: 'Yamaha',
      specifications: ['Барабаны'],
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
