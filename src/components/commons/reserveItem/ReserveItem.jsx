import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Shedule from '../shedule/Shedule';
import Modal from './modal/Modal';
import DataSelect from '../dateSelect/DateSelect';
import {
  CLEAR_ROOM_SERVER_STATUS,
  CLEAR_RECORD_SERVER_STATUS,
  GET_ROOMS,
  GET_RECORDS,
  GET_DAY_IN_ROOM,
  GET_DAY_IN_RECORD,
  CLEAR_CHOSEN_DAY,
} from '../../../redux/constants';

import cl from './ReserveItem.module.css';

const clearReserveStatus = {
  rooms: CLEAR_ROOM_SERVER_STATUS,
  records: CLEAR_RECORD_SERVER_STATUS,
};
const getItem = {
  rooms: GET_ROOMS,
  records: GET_RECORDS,
};
const getDay = {
  rooms: GET_DAY_IN_ROOM,
  records: GET_DAY_IN_RECORD,
};

const ReserveItem = ({
  dates,
  itemInfo,
  addReserveTime,
  chosenDay,
  serverMessage,
  error,
}) => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
    dispatch({ type: clearReserveStatus[itemInfo.type] });
    dispatch({ type: CLEAR_CHOSEN_DAY });
    dispatch({ type: getItem[itemInfo.type] });
  };

  const getDateFromPicker = (date) => {
    const dayFromPicker = dates.filter(
      (element) =>
        element.date === date.date &&
        element.month === date.month &&
        element.year === date.year
    );

    if (dayFromPicker.length === 1) {
      const day = dayFromPicker[0];
      const data = { dayId: day.id, name: itemInfo.name };
      dispatch({ type: getDay[itemInfo.type], data });
      setIsModal(true);
    }
  };

  const modall = isModal && (
    <Modal
      closeModal={closeModal}
      itemInfo={itemInfo}
      addReserveTime={addReserveTime}
      chosenDay={chosenDay}
      serverMessage={serverMessage}
      error={error}
    />
  );

  return (
    <div className='item'>
      {modall}
      <h2 className={cl.title}> {itemInfo.name}</h2>
      <DataSelect getDateFromPicker={getDateFromPicker} />
      <Shedule timeData={dates} openModal={openModal} itemInfo={itemInfo} />
    </div>
  );
};

ReserveItem.propTypes = {
  dates: PropTypes.arrayOf(PropTypes.shape).isRequired,
  itemInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
  addReserveTime: PropTypes.func.isRequired,
};

export default ReserveItem;
