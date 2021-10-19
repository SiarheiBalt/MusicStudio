import cl from './DayShedule.module.css';

const DayShedule = ({ day, openModal }) => {
  return (
    <div className={cl.day} onClick={() => openModal(day)}>
      <h4 className={cl.title}>
        {day.date} {day.monthName} <br />
        {day.dayofWeek}
      </h4>
      <div className={cl.status}>
        <span className={cl.status__text}>Имеется свободное время</span>
      </div>
    </div>
  );
};

export default DayShedule;
