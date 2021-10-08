import cl from './Input.module.css';

export const Input = ({ onchangeInput, value, type }) => {
  const onchange = (event) => {
    onchangeInput(event);
  };
  return (
    <input
      type={type ? type : 'text'}
      value={value}
      onChange={onchange}
      className={cl.input}
    />
  );
};
