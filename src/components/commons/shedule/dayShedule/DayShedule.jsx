import cl from './DayShedule.module.css';

const DayShedule = ({ day, openModal }) => {
  const countFreeTime = day.reserveTime.reduce((acc, time) => {
    if (time.isFree) {
      acc++;
    }
    return acc;
  }, 0);

  return (
    <div className={cl.day} onClick={() => openModal(day)}>
      <h4 className={cl.title}>
        {day.date} {day.monthName} <br />
        {day.dayofWeek}
      </h4>
      <div className={cl.status}>
        <span className={`${cl.status__text} ${countFreeTime === 0 && cl.red}`}>
          Свободных часов - {countFreeTime}
        </span>
      </div>
    </div>
  );
};

export default DayShedule;
