import PropTypes from 'prop-types';
import { useState } from 'react';

import { useDispatch } from 'react-redux';

import Shedule from '../shedule/Shedule';
import Modal from './modal/Modal';
import DataSelect from '../dateSelect/DateSelect';

import cl from './ReserveItem.module.css';
import { ACTIONS } from '../../../redux/constants';

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
  // const [dayForModal, setDayForModal] = useState({});

  const openModal = (day) => {
    setIsModal(true);
    // setDayForModal(day);
  };

  const closeModal = () => {
    setIsModal(false);
    dispatch({ type: ACTIONS.CLEAR_ROOM_SERVER_STATUS });
    dispatch({ type: ACTIONS.CLEAR_CHOSEN_DAY });
    dispatch({ type: ACTIONS.GET_ROOMS });
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
      dispatch({ type: ACTIONS.GET_DAY_IN_ROOM, data });
      // setDayForModal(day);
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
      <Shedule timeData={dates} openModal={openModal} name={itemInfo.name} />
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
