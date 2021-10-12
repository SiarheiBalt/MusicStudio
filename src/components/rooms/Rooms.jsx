import { useSelector } from 'react-redux';
import ReserveItem from '../commons/reserveItem/ReserveItem';
import RoomsInfo from './roomsInfo/RoomsInfo';
import cl from './Rooms.module.css';
import { Redirect, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ACTIONS } from './../../redux/constants';

const Rooms = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.reserveTime.rooms);

  const reserveSubmit = (formData) => {
    dispatch({ type: ACTIONS.RESERVE_ROOM, formData });
  };

  return (
    <BrowserRouter>
      <div className={cl.rooms}>
        <RoomsInfo />

        <Route exact path='/rooms'>
          <Redirect to={`/${data[0].name}`} />
        </Route>

        {data.map((room, i) => (
          <Route
            key={i}
            path={`/${room.name}`}
            render={() => (
              <ReserveItem
                key={i}
                name={room.name}
                dates={room.dates}
                reserveSubmit={reserveSubmit}
                type={'rooms'}
              />
            )}
          ></Route>
        ))}
      </div>
    </BrowserRouter>
  );
};

export default Rooms;
