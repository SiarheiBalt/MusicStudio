import { useSelector } from 'react-redux';
import ReserveItem from '../../commons/reserveItem/ReserveItem';
import RoomsInfo from './roomsInfo/RoomsInfo';
// import cl from './Rooms.module.css';
import { Redirect, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './../../../App.css';

const Rooms = () => {
  const data = useSelector((store) => store.reserveTime.rooms);

  const reserveItem = data.map((room, i) => (
    <Route
      key={i}
      path={`/${room.name}`}
      render={() => {
        const itemInfo = {
          name: room.name,
          type: 'rooms',
        };
        return <ReserveItem key={i} dates={room.dates} itemInfo={itemInfo} />;
      }}
    ></Route>
  ));

  return (
    <BrowserRouter>
      <div className={`rooms form`}>
        <RoomsInfo />
        <Route exact path="/rooms">
          <Redirect to={`/${data[0].name}`} />
        </Route>
        {reserveItem}
      </div>
    </BrowserRouter>
  );
};

export default Rooms;
