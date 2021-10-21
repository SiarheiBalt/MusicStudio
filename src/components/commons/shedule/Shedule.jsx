import Day from './day/Day';
import cl from './Shedule.module.css';

const Shedule = ({ timeData, openModal }) => {
  const days = timeData.map((day, i) => {
    return i < 14 && <Day key={day.id} day={day} openModal={openModal} />;
  });
  return <div className={cl.shedule}>{days}</div>;
};

export default Shedule;
