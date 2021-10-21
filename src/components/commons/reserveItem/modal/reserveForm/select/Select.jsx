import cl from './Select.module.css';
import { useState } from 'react';

const Select = ({ selectTime, setError }) => {
  const [select, setSelect] = useState('');

  const selectChange = (event) => {
    setError('');
    setSelect(event.target.value);
    selectTime(event.target.value);
  };

  const optionsArray = [
    '',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
  const options = optionsArray.map((option, i) => (
    <option key={i} className={'option'} value={option}>
      {option}
    </option>
  ));

  return (
    <select className={cl.select} value={select} onChange={selectChange}>
      {options}
    </select>
  );
};
export default Select;
