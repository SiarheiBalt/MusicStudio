import { createData } from '../../utils/date';
import { ACTIONS } from '../constants';

const defaultState = {
  instruments: [
    {
      dates: createData(),
      specifications: { type: 'Гитара', name: 'Fender Stratocaster' },
      image: '/instrumentImages/guitar.jpg',
    },
    {
      dates: createData(),
      specifications: { type: 'Басс гитара', name: 'Fender JazzBass' },
      image: '/instrumentImages/bassGuitar.jpg',
    },
    {
      dates: createData(),
      specifications: { type: 'Гитара', name: 'Gibson SG' },
      image: '/instrumentImages/gibsonSG.jpg',
    },
    {
      dates: createData(),
      specifications: { type: 'Акустическая гитара', name: 'Epiphone' },
      image: '/instrumentImages/acusticGuitar.jpg',
    },
    {
      dates: createData(),
      specifications: { type: 'Барабаны', name: 'Yamaha' },
      image: '/instrumentImages/drums.jpg',
    },
  ],
};

const reserveInstruments = (state = defaultState, action) => {
  switch (action.type) {
    case '':

    default:
      return state;
  }
};

export default reserveInstruments;
