import { useState } from 'react';
import PropTypes from 'prop-types';

import ReserveForm from './reserveForm/ReserveForm';

import cl from './Modal.module.css';
import SmallPreloader from '../../preloader/SmallPreloader';
import { getUserLocalStorage } from '../../../../utils/localStorage';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../../../redux/constants';

const Modal = ({
  closeModal,
  itemInfo,
  addReserveTime,
  chosenDay,
  serverMessage,
  error,
}) => {
  const dispatch = useDispatch();

  const [selectedHours, setSelectedHours] = useState([]);

  const hourClick = (hour) => {
    let selectedHoursClone = selectedHours.concat();
    const isHourInSelectedHours = selectedHours.some(
      (element) => element === hour
    );
    if (isHourInSelectedHours) {
      selectedHoursClone = selectedHours.filter(
        (element) => element !== hour && element
      );
    } else {
      selectedHoursClone.push(hour);
    }
    setSelectedHours(selectedHoursClone);
  };

  const addReserve = () => {
    dispatch({ type: ACTIONS.CLEAR_ROOM_SERVER_STATUS });
    const { userId, token } = getUserLocalStorage();
    const formData = {
      auth: token,
      name: itemInfo.name,
      dayId: chosenDay.id,
      reserveTime: selectedHours,
      userId,
    };
    addReserveTime(formData);
    setSelectedHours([]);
    dispatch({ type: ACTIONS.CLEAR_CHOSEN_DAY });
    const data = { dayId: chosenDay.id, name: itemInfo.name };
    setTimeout(() => {
      dispatch({ type: ACTIONS.GET_DAY_IN_ROOM, data });
    }, 1000);
  };

  const reserveForm = chosenDay ? (
    <ReserveForm
      selectedHours={selectedHours}
      closeModal={closeModal}
      day={chosenDay}
      hourClick={hourClick}
      itemInfo={itemInfo}
      addReserve={addReserve}
      serverMessage={serverMessage}
      error={error}
    />
  ) : (
    <SmallPreloader />
  );

  return (
    <div className={cl.background}>
      <div className={cl.container}>{reserveForm}</div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  addReserveTime: PropTypes.func.isRequired,
};

export default Modal;
