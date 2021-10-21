import cl from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ action, onClick, disabled }) => {
  const click = (event) => {
    onClick(event);
  };
  return (
    <button disabled={disabled} onClick={click} className={cl.button}>
      {action}
    </button>
  );
};

Button.propTypes = {
  action: PropTypes.string,
};
