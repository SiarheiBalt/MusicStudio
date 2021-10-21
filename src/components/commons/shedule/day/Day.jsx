import cl from './Day.module.css';
import PropTypes from 'prop-types';

const Day = ({ day, openModal }) => {
  const countFreeTime = day.reserveTime.reduce((acc, time) => {
    if (time.isFree) {
      acc++;
    }
    return acc;
  }, 0);

  const statusClass = `${cl.status__text} ${countFreeTime === 0 && cl.red}`;

  const status__text = 'Свободных часов -';

  return (
    <div className={cl.day} onClick={() => openModal(day)}>
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
};

export default Day;
