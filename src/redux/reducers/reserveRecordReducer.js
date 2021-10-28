import createData from '../../utils/date';
import { ACTIONS } from '../constants';

const defaultState = {
  record: [
    {
      dates: createData(),
      name: 'solo',
      id: Math.random().toString(36).substr(2, 9),
    },
    {
      dates: createData(),
      name: 'live',
      id: Math.random().toString(36).substr(2, 9),
    },
  ],
};

const reserveRecord = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.RESERVE_RECORD:
      const dayId = action.formData.resrveDate.id;
      const reserveTime = action.formData.selectedTime;

      const record = state.record.map((typeRecord) => {
        typeRecord.dates = typeRecord.dates.map((day) => {
          if (dayId === day.id) {
            day.reserveTime = day.reserveTime.map((hourInfo) => {
              const hour = hourInfo.hour;
              const findHour = reserveTime.some((el) => el === hour);
              if (findHour) {
                hourInfo.isFree = false;
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
    default:
      return state;
  }
};

export default reserveRecord;
