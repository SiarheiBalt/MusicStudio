import cl from './Modal.module.css';
import ReserveForm from './reserveForm/ReserveForm';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ACTIONS } from '../../../../redux/constants';
import CloseIcoButton from './closeIcoButton/CloseIcoButton';

const Modal = ({ closeModal, day, itemInfo }) => {
  const [selectedHours, setSelectedHours] = useState([]);
  const dispatch = useDispatch();

  const hourClick = (hour) => {
    let array = selectedHours.concat();
    if (selectedHours.some((element) => element === hour)) {
      array = selectedHours.filter((element) => element !== hour && element);
    } else {
      array.push(hour);
    }
    setSelectedHours(array);
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
        <CloseIcoButton close={closeModal} />{' '}
        <ReserveForm
          selectedHours={selectedHours}
          day={day}
          hourClick={hourClick}
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
