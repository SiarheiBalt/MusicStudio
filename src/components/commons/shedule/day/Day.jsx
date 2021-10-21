import cl from './Day.module.css';

const Day = ({ day, openModal }) => {
  const countFreeTime = day.reserveTime.reduce((acc, time) => {
    if (time.isFree) {
      acc++;
    }
    return acc;
  }, 0);
  const status__text = 'Свободных часов -';
  return (
    <div className={cl.day} onClick={() => openModal(day)}>
      <h4 className={cl.title}>
        {day.date} {day.monthName} <br />
        {day.dayofWeek}
      </h4>
      <div className={cl.status}>
        <span className={`${cl.status__text} ${countFreeTime === 0 && cl.red}`}>
          {status__text} {countFreeTime}
        </span>
      </div>
    </div>
  );
};

export default Day;
