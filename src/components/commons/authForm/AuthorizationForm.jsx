import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ACTIONS } from '../../../redux/constants';
import ServerStatus from './serverStatus/ServerStatus';
import LoginForm from './loginForm/LoginForm';
import RegisterationForm from './registrationForm/RegistrationForm';

import './../../../App.css';
import cl from './AuthorizationForm.module.css';

const AuthorizationForm = ({ error, registrationUserMessage }) => {
  const dispatch = useDispatch();
  const typeForm = { login: 'Авторизация', registration: 'Регистрация' };
  const [formState, setFormState] = useState(typeForm.registration);

  const changeFormState = () => {
    dispatch({ type: ACTIONS.CLEAN_AUTH_ERROR_MESSAGE });
    if (formState === typeForm.login) {
      setFormState(typeForm.registration);
    } else {
      setFormState(typeForm.login);
    }
  };

  const registrationSubmit = (userData) => {
    dispatch({ type: ACTIONS.REGISTRATION_USER, body: userData });
  };

  const loginSubmit = (userData) => {
    dispatch({ type: ACTIONS.LOGIN_USER, body: userData });
  };

  const formType =
    formState === typeForm.registration ? (
      <LoginForm submit={loginSubmit} />
    ) : (
      <RegisterationForm submit={registrationSubmit} />
    );

  return (
    <div className={`${cl.form} form`}>
      <div className={cl.button__container}>
        <button className={cl.button} onClick={changeFormState}>
          {formState}
        </button>
      </div>
      {formType}
      <ServerStatus error={error} message={registrationUserMessage} />
    </div>
  );
};

export default AuthorizationForm;
