import { useState } from 'react';
import { findDayFromPicker } from '../../../../utils/time';
import DataSelect from '../../../commons/dateSelect/DateSelect';
import CloseIcoButton from '../../../commons/reserveItem/modal/closeIcoButton/CloseIcoButton';
import ReserveForm from '../../../commons/reserveItem/modal/reserveForm/ReserveForm';
import cl from './Modal.module.css';

const Modal = ({ closeModal, dates }) => {
  const date = new Date();
  const initDateFromPicker = {
    date: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };
  const initDay = findDayFromPicker(initDateFromPicker, dates);

  const [dateFromPicker, setDateFromPicker] = useState(initDateFromPicker);
  const [selectedHours, setSelectedHours] = useState([]);
  const [day, setDay] = useState(initDay);

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
    console.log('addReserve');
  };

  const getDateFromPicker = (date) => {
    if (findDayFromPicker(date, dates)) {
      const day = findDayFromPicker(date, dates);
      setDay(day);
    }
  };

  return (
    <div className={cl.background}>
      <div className={cl.container}>
        <CloseIcoButton close={closeModal} />
        <div className={cl.picker}>
          <DataSelect getDateFromPicker={getDateFromPicker} />{' '}
          <span className={cl.text}>Выберите интересующую дату </span>
        </div>
        <ReserveForm
          selectedHours={selectedHours}
          closeModal={closeModal}
          day={day}
          hourClick={hourClick}
          addReserve={addReserve}
        />
      </div>
    </div>
  );
};

export default Modal;
