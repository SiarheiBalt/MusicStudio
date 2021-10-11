import ReserveForm from '../../commons/ReserveForm/ReserveForm';
import Shedule from '../../commons/shedule/Shedule';
import cl from './Room.module.css';

const Room = ({ dates, size }) => {
  return (
    <div className={cl.room}>
      <h2 className={cl.title}>Комната {size}</h2>
      <Shedule timeData={dates} />
      <ReserveForm size={size} />
    </div>
  );
};

export default Room;
