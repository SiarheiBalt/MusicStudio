import cl from './DateSelect.module.css';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import { useState } from 'react';

registerLocale('ru', ru);

const DataSelect = ({ getDateFromPicker }) => {
  const [reserveDate, setReserveDate] = useState(new Date());

  const selectDate = (date) => {
    const obj = {
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    };
    getDateFromPicker(obj);
  };

  const onChangeDataPicker = (date) => {
    setReserveDate(date);
    selectDate(date);
  };

  const text = ' Выберите дату, либо кликните на ближайший день ниже';

  return (
    <div className={cl.container}>
      <span className={cl.text}> {text} </span>{' '}
      <div className={cl.picker__container}>
        <DatePicker
          className={cl.datapicker}
          locale="ru"
          selected={reserveDate}
          onChange={onChangeDataPicker}
        />
      </div>
    </div>
  );
};

export default DataSelect;
