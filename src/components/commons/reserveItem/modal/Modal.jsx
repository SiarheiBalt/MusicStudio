import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import ReserveForm from './reserveForm/ReserveForm';
import { ACTIONS } from '../../../../redux/constants';

import cl from './Modal.module.css';

const Modal = ({ closeModal, day, itemInfo }) => {
  const [selectedHours, setSelectedHours] = useState([]);
  const dispatch = useDispatch();

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
    const formData = {
      resrveDate: day,
      selectedTime: selectedHours,
      itemInfo,
    };
    dispatch({ type: ACTIONS.RESERVE_ROOM, formData });
    setSelectedHours([]);
  };

  return (
    <div className={cl.background}>
      <div className={cl.container}>
        {' '}
        <ReserveForm
          selectedHours={selectedHours}
          closeModal={closeModal}
          day={day}
          hourClick={hourClick}
          itemInfo={itemInfo}
          addReserve={addReserve}
        />
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  day: PropTypes.shape().isRequired,
  itemInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default Modal;
