import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { RESERVE_ROOM, GET_ROOMS } from '../../../redux/constants';

import ReserveItem from '../../commons/reserveItem/ReserveItem';
import RoomsInfo from './roomsInfo/RoomsInfo';
import Preloader from '../../commons/preloader/Preloader';

import './../../../App.css';

const Rooms = () => {
  const { rooms, chosenDay, serverMessage, error } = useSelector(
    (store) => store.reserveRoom
  );
  const dispatch = useDispatch();

  const addReserveTime = (formData) => {
    dispatch({ type: RESERVE_ROOM, formData });
  };

  useEffect(() => {
    dispatch({ type: GET_ROOMS });
  }, [dispatch]);

  if (!rooms) {
    return <Preloader height={'100vh'} />;
  }

  const reserveItem = rooms.map((room) => (
    <Route
      key={room.id}
      path={`/${room.name}`}
      render={() => {
        const itemInfo = {
          name: room.name,
          type: 'rooms',
        };
        return (
          <ReserveItem
            dates={room.dates}
            itemInfo={itemInfo}
            chosenDay={chosenDay}
            addReserveTime={addReserveTime}
            serverMessage={serverMessage}
            error={error}
          />
        );
      }}
    ></Route>
  ));

  return (
    <BrowserRouter>
      <div className='rooms form'>
        <RoomsInfo />
        <Route exact path='/rooms'>
          <Redirect to={`/${rooms[0].name}`} />
        </Route>
        {reserveItem}
      </div>
    </BrowserRouter>
  );
};

export default Rooms;
