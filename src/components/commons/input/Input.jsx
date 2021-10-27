import cl from './Input.module.css';
import PropTypes from 'prop-types';

export const Input = ({ onchangeInput, value, type = 'text' }) => {
  const onchange = (event) => {
    onchangeInput(event);
  };

  return (
    <input type={type} value={value} onChange={onchange} className={cl.input} />
  );
};

Input.propTypes = {
  onchangeInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
};
