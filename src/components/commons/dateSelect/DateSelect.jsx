import {
  container,
  picker__container,
  datapicker,
} from './DateSelect.module.css';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import { useState } from 'react';
import PropTypes from 'prop-types';

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
    const today = new Date();
    if (date > today) {
      setReserveDate(date);
      selectDate(date);
    } else {
      setReserveDate(today);
      selectDate(today);
    }
  };

  return (
    <div className={container}>
      <div className={picker__container}>
        <DatePicker
          className={datapicker}
          locale='ru'
          selected={reserveDate}
          onChange={onChangeDataPicker}
        />
      </div>
    </div>
  );
};

DataSelect.propTypes = {
  getDateFromPicker: PropTypes.func.isRequired,
};

export default DataSelect;
