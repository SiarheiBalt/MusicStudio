import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { ACTIONS } from '../../../../redux/constants';
import { findDayFromPicker } from '../../../../utils/time';
import DataSelect from '../../../commons/dateSelect/DateSelect';
import CloseIcoButton from '../../../commons/reserveItem/modal/closeIcoButton/CloseIcoButton';
import ReserveForm from '../../../commons/reserveItem/modal/reserveForm/ReserveForm';

import cl from './Modal.module.css';
import { getUserLocalStorage } from '../../../../utils/localStorage';
import { getTimeNow } from '../../../../utils/date';

const datePickerText = 'Выберите интересующую дату';

const Modal = ({
  closeModal,
  dates,
  instrumentName,
  chosenDay,
  serverMessage,
  error,
}) => {
  const dispatch = useDispatch();

  const date = new Date();
  const initDate = {
    date: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };
  const initDay = findDayFromPicker(initDate, dates);

  useEffect(() => {
    const formData = { name: instrumentName, dayId: initDay.id };
    dispatch({ type: ACTIONS.GET_CHOSEN_DAY_INSTRUMENT, formData });
  }, []);

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
    const isAuth = getUserLocalStorage();
    if (isAuth) {
      const { userId, token, email } = getUserLocalStorage();
      const formData = {
        userEmail: email,
        auth: token,
        userId,
        name: instrumentName,
        dayId: chosenDay.id,
        reserveTime: selectedHours,
        actionTime: getTimeNow(),
        date: {
          date: chosenDay.date,
          monthName: chosenDay.monthName,
        },
        type: 'instrument',
      };
      setSelectedHours([]);
      dispatch({ type: ACTIONS.RESERVE_INSTRUMENT, formData });
    }
  };

  const getDateFromPicker = (date) => {
    dispatch({ type: ACTIONS.CLEAR_CHOSEN_DAY_INSTRUMENT });
    const day = findDayFromPicker(date, dates);
    if (day) {
      const formData = { name: instrumentName, dayId: day.id };
      dispatch({ type: ACTIONS.GET_CHOSEN_DAY_INSTRUMENT, formData });
    }
    setSelectedHours([]);
  };

  const reserveForm = chosenDay ? (
    <ReserveForm
      selectedHours={selectedHours}
      closeModal={closeModal}
      day={chosenDay}
      hourClick={hourClick}
      addReserve={addReserve}
      serverMessage={serverMessage}
      error={error}
    />
  ) : (
    <></>
  );

  return (
    <div className={cl.background}>
      <div className={cl.container}>
        <CloseIcoButton close={closeModal} />
        <div className={cl.picker}>
          <DataSelect getDateFromPicker={getDateFromPicker} />{' '}
          <span className={cl.text}>{datePickerText} </span>
        </div>
        {reserveForm}
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
