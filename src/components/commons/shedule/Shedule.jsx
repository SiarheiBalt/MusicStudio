import DayShedule from './dayShedule/DayShedule';
import cl from './Shedule.module.css';

const Shedule = ({ timeData, openModal }) => {
  return (
    <div className={cl.shedule}>
      {timeData.map((day, i) => {
        return (
          i < 14 && <DayShedule key={day.id} day={day} openModal={openModal} />
        );
      })}
    </div>
  );
};

export default Shedule;
