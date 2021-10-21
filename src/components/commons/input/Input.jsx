import cl from './Input.module.css';

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
