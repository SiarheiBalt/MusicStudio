import cl from './ReserveForm.module.css';
import Select from './select/Select';
import { Button } from '../../../button/Button';
import CloseIcoButton from '../closeIcoButton/CloseIcoButton';
import Hour from '../hour/Hour';
import { useState } from 'react';
import timeValidator from '../../../../../functions/time';
import ErrorSelect from './error/ErrorSelect';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../../../../redux/constants';

const ReserveForm = ({ closeModal, day, hourClick, itemInfo }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const textError = 'Некорректно введено время';
  const [selectTimeStart, setSelectTimeStart] = useState('');
  const [selectTimeEnd, setSelectTimeEnd] = useState('');

  const selectValidator = () => {
    return (
      selectTimeStart >= selectTimeEnd ||
      selectTimeStart === '' ||
      selectTimeEnd === ''
    );
  };
  const addReserve = () => {
    const validTime = timeValidator(selectTimeStart, selectTimeEnd, day);
    if (selectValidator() || !validTime) {
      setError(textError);
      return;
    }
    const formData = {
      resrveDate: day,
      selectedTime: { start: selectTimeStart, end: selectTimeEnd },
      itemInfo,
    };
    dispatch({ type: ACTIONS.RESERVE_ROOM, formData });
  };

  return (
    <div className={cl.container}>
      <CloseIcoButton close={closeModal} />
      <h3
        className={cl.title}
      >{`${day.date} - ${day.monthName} (${day.dayofWeek})`}</h3>
      <h3 className={cl.title}>Резервирование времени</h3>
      <div className={cl.hours}>
        {day.reserveTime.map((time, i) => (
          <Hour key={i} time={time} hourClick={hourClick} />
        ))}
      </div>
      <div className={cl.reserve}>
        <span className={cl.text}>
          Выбрать время с{' '}
          <Select selectTime={setSelectTimeStart} setError={setError} /> до{' '}
          <Select selectTime={setSelectTimeEnd} setError={setError} />{' '}
        </span>
        <Button action={'Зарезервировать'} onClick={addReserve} />
      </div>
      {!!error && <ErrorSelect error={error} />}
    </div>
  );
};

export default ReserveForm;
