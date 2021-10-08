import cl from './Button.module.css';

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
