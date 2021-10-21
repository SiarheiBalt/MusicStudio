import cl from './ErrorSelect.module.css';
import PropTypes from 'prop-types';

const ErrorSelect = ({ error }) => {
  return <div className={cl.error}>{error}</div>;
};

ErrorSelect.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorSelect;
