import cl from './DayShedule.module.css';

const DayShedule = ({ day }) => {
  return (
    <div className={cl.day}>
      <h4 className={cl.title}>
        {day.date} {day.monthName}/{day.dayofWeek}
      </h4>
      <div>
        <div className={cl.time}>
          <span> 10:00 до 12:00 - </span>{' '}
          <div
            className={`${cl.label} ${
              day.reserveTime['10'] ? cl.green : cl.red
            }`}
          ></div>
        </div>
        <div className={cl.time}>
          <span> 12:00 до 14:00 - </span>{' '}
          <div
            className={`${cl.label} ${
              day.reserveTime['10'] ? cl.green : cl.red
            }`}
          ></div>
        </div>
        <div className={cl.time}>
          <span> 14:00 до 16:00 - </span>{' '}
          <div
            className={`${cl.label} ${
              day.reserveTime['10'] ? cl.green : cl.red
            }`}
          ></div>
        </div>
        <div className={cl.time}>
          <span> 16:00 до 18:00 - </span>{' '}
          <div
            className={`${cl.label} ${
              day.reserveTime['10'] ? cl.green : cl.red
            }`}
          ></div>
        </div>
        <div className={cl.time}>
          <span> 18:00 до 20:00 - </span>{' '}
          <div
            className={`${cl.label} ${
              day.reserveTime['10'] ? cl.green : cl.red
            }`}
          ></div>
        </div>
        <div className={cl.time}>
          <span> 20:00 до 22:00 - </span>{' '}
          <div
            className={`${cl.label} ${
              day.reserveTime['10'] ? cl.green : cl.red
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DayShedule;
