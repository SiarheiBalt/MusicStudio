import cl from './Select.module.css';
import { useState } from 'react';

const Select = ({ selectTime }) => {
  const [select, setSelect] = useState('');

  const selectChange = (event) => {
    setSelect(event.target.value);
    selectTime(event.target.value);
  };
  return (
    <select className={cl.select} value={select} onChange={selectChange}>
      <option value=""></option>
      <option value="10:00">10:00</option>
      <option value="11:00">11:00</option>
      <option value="12:00">12:00</option>
      <option value="13:00">13:00</option>
      <option value="14:00">14:00 </option>
      <option value="15:00">15:00 </option>
      <option value="16:00">16:00 </option>
      <option value="17:00">17:00 </option>
      <option value="18:00">18:00 </option>
      <option value="19:00">19:00 </option>
      <option value="20:00">20:00 </option>
      <option value="21:00">21:00 </option>
    </select>
  );
};
export default Select;
