import cl from './Select.module.css';
import { useState } from 'react';

const Select = () => {
  const [select, setSelect] = useState('');

  const selectChange = (event) => {
    setSelect(event.target.value);
  };
  return (
    <select className={cl.select} value={select} onChange={selectChange}>
      <option value=""></option>
      <option value="10">10:00</option>
      <option value="11">11:00</option>
      <option value="12">12:00</option>
      <option value="13">13:00</option>
      <option value="14">14:00 </option>
      <option value="15">15:00 </option>
      <option value="16">16:00 </option>
      <option value="17">17:00 </option>
      <option value="18">18:00 </option>
      <option value="19">19:00 </option>
      <option value="20">20:00 </option>
      <option value="21">21:00 </option>
    </select>
  );
};
export default Select;
