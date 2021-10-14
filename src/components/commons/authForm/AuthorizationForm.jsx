import cl from './authorizationForm.module.css';
import { Button } from './../button/Button';
import { Input } from './../input/Input';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../../redux/constants';

const AuthorizationForm = () => {
  const dispatch = useDispatch();
  const [loginInput, setLoginInput] = useState();
  const [passwordInput, setPasswordInput] = useState();

  const changeLoginInput = (event) => {
    setLoginInput(event.target.value);
  };
  const changePasswordInput = (event) => {
    setPasswordInput(event.target.value);
  };

  const registration = () => {
    dispatch({
      type: ACTIONS.REGISTRATION_USER,
      userData: { email: loginInput, password: passwordInput },
    });
  };

  return (
    <div className={cl.form}>
      <h3 className={cl.title}>Войти в приложение</h3>
      <div className={cl.user}>
        <span>Login</span> <Input onchangeInput={changeLoginInput} />
        <span>Password</span>{' '}
        <Input onchangeInput={changePasswordInput} type={'password'} />
        <Button action={'Подтвердить'} />
        <Button action={'Зарегистрироваться'} onClick={registration} />
      </div>
    </div>
  );
};

export default AuthorizationForm;
