import { useState } from 'react';
import PropTypes from 'prop-types';
import { ACTIONS } from '../../../../redux/constants';
import CloseIcoButton from './closeIcoButton/CloseIcoButton';

import ReserveForm from './reserveForm/ReserveForm';

import cl from './Modal.module.css';
import SmallPreloader from '../../preloader/SmallPreloader';
import { getUserLocalStorage } from '../../../../utils/localStorage';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../../../redux/constants';
import { getTimeNow } from '../../../../utils/date';

const clearServerStatus = {
  rooms: ACTIONS.CLEAR_ROOM_SERVER_STATUS,
  records: ACTIONS.CLEAR_RECORD_SERVER_STATUS,
};

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
    dispatch({ type: clearServerStatus[itemInfo.type] });
    const isAuth = getUserLocalStorage();
    if (isAuth) {
      const { userId, token } = getUserLocalStorage();
      const formData = {
        auth: token,
        userId,
        name: itemInfo.name,
        type: itemInfo.type,
        dayId: chosenDay.id,
        reserveTime: selectedHours,
        date: {
          date: chosenDay.date,
          monthName: chosenDay.monthName,
        },
        actionTime: getTimeNow(),
      };
      addReserveTime(formData);
      setSelectedHours([]);
      dispatch({ type: ACTIONS.CLEAR_CHOSEN_DAY });
    }
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
  serverMessage: PropTypes.string,
  error: PropTypes.string,
};

export default Modal;
