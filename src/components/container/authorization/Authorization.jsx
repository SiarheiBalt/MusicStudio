import cl from './Authorization.module.css';
import AuthorizationForm from '../../commons/authForm/AuthorizationForm';
import { useSelector } from 'react-redux';

const Authorization = () => {
  const data = useSelector((state) => state.authReducer);
  const { error, registrationMessage } = data;

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
