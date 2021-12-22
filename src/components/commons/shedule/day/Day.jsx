import cl from './Day.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  GET_DAY_IN_ROOM,
  GET_DAY_IN_RECORD,
} from '../../../../redux/constants';

const getDayAction = {
  rooms: GET_DAY_IN_ROOM,
  records: GET_DAY_IN_RECORD,
};

const Day = ({ day, openModal, itemInfo }) => {
  const dispatch = useDispatch();
  const getDay = () => {
    const data = { dayId: day.id, name: itemInfo.name };
    dispatch({ type: getDayAction[itemInfo.type], data });
    openModal();
  };

  const countFreeTime = day.reserveTime.reduce((acc, time) => {
    if (time.isFree) {
      acc++;
    }
    return acc;
  }, 0);

  const statusClass = `${cl.status__text} ${countFreeTime === 0 && cl.red}`;

  const status__text = 'Свободных часов -';

  return (
    <div className={cl.day} onClick={getDay}>
      <h4 className={cl.title}>
        {day.date} {day.monthName} <br />
        {day.dayofWeek}
      </h4>
      <div className={cl.status}>
        <span className={statusClass}>
          {status__text} {countFreeTime}
        </span>
      </div>
    </div>
  );
};

Day.propTypes = {
  openModal: PropTypes.func.isRequired,
  day: PropTypes.shape({
    date: PropTypes.number.isRequired,
    dayofWeek: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    month: PropTypes.number.isRequired,
    monthName: PropTypes.string.isRequired,
    reserveTime: PropTypes.arrayOf(PropTypes.shape),
    year: PropTypes.number.isRequired,
  }).isRequired,
  name: PropTypes.shape(),
};

export default Day;
