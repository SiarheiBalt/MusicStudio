import PropTypes from 'prop-types';

import cl from './Button.module.css';

export const Button = ({ text, onClick, disabled }) => {
  const click = (event) => {
    onClick(event);
  };
  return (
    <button disabled={disabled} onClick={click} className={cl.button}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
