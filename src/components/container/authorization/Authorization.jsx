import { Redirect, Route } from 'react-router';

import AuthorizationForm from '../../commons/authForm/AuthorizationForm';
import { useSelector } from 'react-redux';

import cl from './Authorization.module.css';

const Authorization = () => {
  const data = useSelector((state) => state.authReducer);
  const { error, registrationMessage, isAuth } = data;

  if (isAuth) return <Route render={() => <Redirect to='/profile' />} />;

  return (
    <div className={cl.container}>
      <AuthorizationForm
        registrationUserMessage={registrationMessage}
        error={error}
      />
    </div>
  );
};

export default Authorization;
