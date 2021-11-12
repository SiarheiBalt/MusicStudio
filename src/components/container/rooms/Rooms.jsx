import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ACTIONS } from '../../../redux/constants';
import ReserveItem from '../../commons/reserveItem/ReserveItem';
import RoomsInfo from './roomsInfo/RoomsInfo';

import './../../../App.css';
import { useEffect } from 'react';
import Preloader from '../../commons/preloader/Preloader';

const Rooms = () => {
  const data = useSelector((store) => store.reserveRoom.rooms);
  const dispatch = useDispatch();

  const addReserveTime = (formData) => {
    dispatch({ type: ACTIONS.RESERVE_ROOM, formData });
    dispatch({ type: ACTIONS.ADD_ORDER_IN_USER, formData });
  };

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_ROOMS });
  }, [dispatch]);

  if (!data) {
    return <Preloader />;
  }

  const reserveItem = data.map((room) => (
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
            addReserveTime={addReserveTime}
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
          <Redirect to={`/${data[0].name}`} />
        </Route>
        {reserveItem}
      </div>
    </BrowserRouter>
  );
};

export default Rooms;
