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

      const reserveType = state[`${type}`].map((type) => {
        type.dates = type.dates.map((day) => {
          if (dayId === day.id) {
            day.reserveTime = day.reserveTime.map((hourInfo) => {
              const hour = hourInfo.hour;
              if (reserveTime.some((el) => el === hour)) {
                hourInfo.isFree = false;
              }
              return hourInfo;
            });
          }
          return day;
        });
        return type;
      });

      return {
        ...state,
        [`${type}`]: reserveType,
      };
    default:
      return state;
  }
};

export default reserveTime;
