import cl from './ReserveForm.module.css';
import Select from './select/Select';
import { Button } from '../../../button/Button';
import CloseIcoButton from '../closeIcoButton/CloseIcoButton';
import Hour from '../hour/Hour';
import { useState } from 'react';
import timeValidator from '../../../../../functions/time';
import ErrorSelect from './error/ErrorSelect';

const ReserveForm = ({ closeModal, day, hourClick }) => {
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
    console.log('dispatch');
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
          Выбрать время с <Select selectTime={setSelectTimeStart} /> до{' '}
          <Select selectTime={setSelectTimeEnd} />{' '}
        </span>
        <Button action={'Зарезервировать'} onClick={addReserve} />
      </div>
      {!!error && <ErrorSelect error={error} />}
    </div>
  );
};

export default ReserveForm;
