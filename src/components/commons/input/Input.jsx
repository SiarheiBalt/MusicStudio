import cl from './Input.module.css';
import PropTypes from 'prop-types';

export const Input = ({ onchangeInput, value, type }) => {
  const onchange = (event) => {
    onchangeInput(event);
  };
  const inputType = type ? type : 'text';

  return (
    <input
      type={inputType}
      value={value}
      onChange={onchange}
      className={cl.input}
    />
  );
};

Input.propTypes = {
  onchangeInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
};
