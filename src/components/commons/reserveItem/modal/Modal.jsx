import { useState } from 'react';
import PropTypes from 'prop-types';

import ReserveForm from './reserveForm/ReserveForm';

import cl from './Modal.module.css';
import SmallPreloader from '../../preloader/SmallPreloader';

const Modal = ({ closeModal, day, itemInfo, addReserveTime, chosenDay }) => {
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
    const formData = {
      resrveDate: day,
      selectedTime: selectedHours,
      itemInfo,
    };
    addReserveTime(formData);
    setSelectedHours([]);
  };

  const reserveForm = chosenDay ? (
    <ReserveForm
      selectedHours={selectedHours}
      closeModal={closeModal}
      day={day}
      hourClick={hourClick}
      itemInfo={itemInfo}
      addReserve={addReserve}
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
  day: PropTypes.shape().isRequired,
  itemInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  addReserveTime: PropTypes.func.isRequired,
};

export default Modal;
