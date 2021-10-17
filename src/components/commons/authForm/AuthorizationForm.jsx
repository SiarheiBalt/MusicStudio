import cl from './AuthorizationForm.module.css';
import LoginRegisterationForm from './LoginRegisterationForm';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../../../src/redux/constants';

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

  return (
    <div className={cl.form}>
      <div className={cl.button__container}>
        <button className={cl.button} onClick={changeFormState}>
          {formState}
        </button>
      </div>
      {formState === typeForm.registration ? (
        <LoginRegisterationForm
          onClick={loginSubmit}
          type={typeForm.login}
          typeForm={typeForm}
        />
      ) : (
        <LoginRegisterationForm
          onClick={registrationSubmit}
          type={typeForm.registration}
          typeForm={typeForm}
        />
      )}
      {!!error && (
        <div className={cl.container__error}>
          <span className={cl.error}>{error}</span>
        </div>
      )}
      {!!registrationUserMessage && (
        <div>
          <span>{registrationUserMessage}</span>
        </div>
      )}
    </div>
  );
};

export default AuthorizationForm;
