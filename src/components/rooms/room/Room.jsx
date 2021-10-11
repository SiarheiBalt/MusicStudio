import { useSelector } from 'react-redux';
import ReserveForm from '../../commons/ReserveForm/ReserveForm';
import Shedule from '../../commons/shedule/Shedule';
import cl from './Room.module.css';

const Room = ({ size }) => {
  const timeData = useSelector((store) => store.reserveRoomReducer.rooms[size]);

  return (
    <div className={cl.room}>
      <h2 className={cl.title}>Комната {size}</h2>
      <Shedule timeData={timeData} />
      <ReserveForm size={size} />
    </div>
  );
};

export default Room;
