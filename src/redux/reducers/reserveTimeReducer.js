import createData from '../../utils/date';
import { ACTIONS } from '../constants';

const defaultState = {
  rooms: [
    { dates: createData(), name: 'big' },
    { dates: createData(), name: 'small' },
  ],
  record: [
    { dates: createData(), name: 'solo' },
    { dates: createData(), name: 'live' },
  ],
};

const reserveTime = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.RESERVE_ROOM:
      const type = action.formData.itemInfo.type;
      const dayId = action.formData.resrveDate.id;
      const reserveTime = action.formData.selectedTime;

      return {
        ...state,
        [`${type}`]: state[`${type}`].map((item) => {
          item.dates = item.dates.map((element) => {
            if (dayId === element.id) {
              element.reserveTime = element.reserveTime.map((time) => {
                const hour = time.hour;
                if (reserveTime.some((el) => el === hour)) {
                  time.isFree = false;
                }
                return time;
              });
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
