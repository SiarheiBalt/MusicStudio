import createData from '../../functions/date';
import { ACTIONS } from '../constants';

const defaultState = {
  rooms: [
    { dates: createData(), name: 'big' },
    { dates: createData(), name: 'small' },
  ],
  record: [
    { dates: createData(), name: 'Solo' },
    { dates: createData(), name: 'Live' },
  ],
};

const reserveTime = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.RESERVE_ROOM:
      const date = action.formData.resrveDate.getDate();
      const month = action.formData.resrveDate.getMonth();
      const selectedTime = action.formData.selectedTime;
      const name = action.formData.name;
      const type = action.formData.type;

      let copyArray = state[`${type}`].concat();

      return {
        ...state,
        [`${type}`]: copyArray.map((item) => {
          item.dates = item.dates.map((element) => {
            if (
              element.date === date &&
              element.month === month &&
              item.name === name
            ) {
              const obj = { isfree: false };
              element.reserveTime[selectedTime] = obj;
            }
            return element;
          });
          return item;
        }),
      };

    default:
      return state;
  }
};

export default reserveTime;
