import DatePicker, { registerLocale } from 'react-datepicker';
import cl from './ReserveForm.module.css';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { Button } from '../button/Button';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../../redux/constants';

registerLocale('ru', ru);

const ReserveForm = ({ size }) => {
  const [resrveDate, setReserveDate] = useState(new Date());
  const [select, setSelect] = useState('10');
  const dispatch = useDispatch();

  const selectChange = (event) => {
    setSelect(event.target.value);
  };

  const buttonClick = () => {
    const formData = {
      resrveDate,
      selectedTime: select,
      size,
    };
    dispatch({ type: ACTIONS.RESERVE_ROOM, formData, customer: null });
  };

  return (
    <div>
      <h3 className={cl.title}>Зарезервировать время</h3>
      <div className={cl.form}>
        <h4 className={cl.title}>Выберите дату</h4>
        <div>
          <DatePicker
            locale='ru'
            selected={resrveDate}
            onChange={(date) => {
              setReserveDate(date);
            }}
          />
        </div>
        <h4 className={cl.title}>Выберите время</h4>
        <select value={select} onChange={selectChange}>
          <option value='10'>10:00 до 12:00</option>
          <option value='12'>12:00 до 14:00</option>
          <option value='14'>14:00 до 16:00</option>
          <option value='16'>16:00 до 18:00</option>
          <option value='18'>18:00 до 20:00</option>
          <option value='20'>20:00 до 22:00</option>
        </select>
        <Button action={'Зарезервировать'} onClick={buttonClick} />
      </div>
    </div>
  );
};

export default ReserveForm;
