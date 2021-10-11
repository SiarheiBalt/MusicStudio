import { useSelector } from 'react-redux';
import Room from './room/Room';
import cl from './Rooms.module.css';

const Rooms = () => {
  const data = useSelector((store) => store.reserveRoomReducer.rooms);

  return (
    <div>
      {data.map((room, i) => (
        <Room key={i} size={room.name} dates={room.dates} />
      ))}
    </div>
  );
};

export default Rooms;
