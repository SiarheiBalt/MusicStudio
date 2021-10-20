import cl from './Modal.module.css';
import ReserveForm from './reserveForm/ReserveForm';
import { useState } from 'react';
import SelectedHour from './selectedHour/SelectedHour';

const Modal = ({ closeModal, day }) => {
  const [isHourSelected, setIsHourSelected] = useState(false);
  const [time, setTime] = useState({});
  const hourClick = (time) => {
    setTime(time);
    setIsHourSelected(true);
  };
  const closeHourSelected = () => {
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
          />
        ) : (
          <ReserveForm
            closeModal={closeModal}
            day={day}
            hourClick={hourClick}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
