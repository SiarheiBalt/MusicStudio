import cl from './Modal.module.css';
import ReserveForm from './reserveForm/ReserveForm';
import { useState } from 'react';
import SelectedHour from './selectedHour/SelectedHour';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../../../redux/constants';

const Modal = ({ closeModal, day, itemInfo }) => {
  const dispatch = useDispatch();
  const [isHourSelected, setIsHourSelected] = useState(false);
  const [time, setTime] = useState();
  const hourClick = (time) => {
    setTime(time);
    setIsHourSelected(true);
  };
  const closeHourSelected = () => {
    setIsHourSelected(false);
  };

  const hourReserve = () => {
    console.log(time);
    const formData = {
      resrveDate: day,
      selectedTime: { start: time, end: `${parseInt(time) + 1}:00` },
      itemInfo,
    };
    dispatch({ type: ACTIONS.RESERVE_ROOM, formData });
    setIsHourSelected(false);
  };

  return (
    <div className={cl.background}>
      <div className={cl.container}>
        {isHourSelected ? (
          <SelectedHour
            closeHourSelected={closeHourSelected}
            closeModal={closeModal}
            day={day}
            time={time}
            hourReserve={hourReserve}
          />
        ) : (
          <ReserveForm
            closeModal={closeModal}
            day={day}
            hourClick={hourClick}
            itemInfo={itemInfo}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
