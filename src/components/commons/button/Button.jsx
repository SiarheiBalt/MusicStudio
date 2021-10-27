import cl from './Button.module.css';
import PropTypes from 'prop-types';

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
  text: PropTypes.string,
};
