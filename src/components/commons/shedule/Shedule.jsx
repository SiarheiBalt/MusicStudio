import DayShedule from './dayShedule/DayShedule';
import cl from './Shedule.module.css';

const Shedule = ({ timeData }) => {
  return (
    <div className={cl.shedule}>
      {timeData.map((day, i) => {
        return i < 14 && <DayShedule key={day.id} day={day} />;
      })}
    </div>
  );
};

export default Shedule;
