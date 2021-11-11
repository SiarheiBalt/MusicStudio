import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { ACTIONS } from '../../../../redux/constants';
import { findDayFromPicker } from '../../../../utils/time';
import DataSelect from '../../../commons/dateSelect/DateSelect';
import CloseIcoButton from '../../../commons/reserveItem/modal/closeIcoButton/CloseIcoButton';
import ReserveForm from '../../../commons/reserveItem/modal/reserveForm/ReserveForm';

import cl from './Modal.module.css';

const text = 'Выберите интересующую дату';

const Modal = ({ closeModal, dates, instrumentId }) => {
  const dispatch = useDispatch();

  const date = new Date();
  const initDate = {
    date: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };
  const initDay = findDayFromPicker(initDate, dates);

  const [selectedHours, setSelectedHours] = useState([]);
  const [day, setDay] = useState(initDay);

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
    const data = {
      id: instrumentId,
      day,
      selectedHours,
    };
    dispatch({ type: ACTIONS.RESERVE_INSTRUMENT, data });
  };

  const getDateFromPicker = (date) => {
    const day = findDayFromPicker(date, dates);
    if (day) {
      setDay(day);
    }
    setSelectedHours([]);
  };

  return (
    <div className={cl.background}>
      <div className={cl.container}>
        <CloseIcoButton close={closeModal} />
        <div className={cl.picker}>
          <DataSelect getDateFromPicker={getDateFromPicker} />{' '}
          <span className={cl.text}>{text} </span>
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

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  dates: PropTypes.arrayOf(PropTypes.shape).isRequired,
  instrumentId: PropTypes.string.isRequired,
};

export default Modal;
