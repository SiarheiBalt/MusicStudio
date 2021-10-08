import ReserveForm from '../../commons/ReserveForm/ReserveForm';
import Shedule from '../../commons/shedule/Shedule';
import cl from './Room.module.css';

const Room = () => {
  return (
    <div className={cl.room}>
      <h2 className={cl.title}>Комната</h2>
      <Shedule />
      <ReserveForm />
    </div>
  );
};

export default Room;
