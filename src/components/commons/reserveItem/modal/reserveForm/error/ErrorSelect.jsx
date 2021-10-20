import cl from './ErrorSelect.module.css';

const ErrorSelect = ({ error }) => {
  return <div className={cl.error}>{error}</div>;
};

export default ErrorSelect;
