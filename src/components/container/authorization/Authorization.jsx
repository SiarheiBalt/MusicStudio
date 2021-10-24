import cl from './Authorization.module.css';
import AuthorizationForm from '../../commons/authForm/AuthorizationForm';

const Authorization = () => {
  return (
    <div className={cl.container}>
      <AuthorizationForm />
    </div>
  );
};

export default Authorization;
