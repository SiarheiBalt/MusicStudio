import Room from './room/Room';
import cl from './Rooms.module.css';

const Rooms = () => {
  return (
    <div>
      <Room size={'big'} />
      <Room size={'small'} />
    </div>
  );
};

export default Rooms;
