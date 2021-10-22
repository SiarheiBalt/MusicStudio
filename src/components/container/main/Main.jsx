import AuthorizationForm from './../../commons/authForm/AuthorizationForm';
import About from './about/About';
import Contacts from './contacts/Contacts';
import cl from './Main.module.css';
import ServiceType from './serviceTypes/ServiceType';
import { useSelector } from 'react-redux';
import LogoutForm from '../commons/authForm/logoutForm.jsx/LogoutForm';

const Main = () => {
  const data = useSelector((state) => state.authReducer);
  const isAuth = data.isAuth;
  const error = data.error;
  const registrationUserMessage = data.registrationMessage;

  return (
    <div className={'main'}>
      <div className={cl.information}>
        <About />
        <div className={cl.block__right}>
          <Contacts />
          {isAuth ? (
            <LogoutForm />
          ) : (
            <AuthorizationForm
              error={error}
              registrationUserMessage={registrationUserMessage}
            />
          )}
        </div>
      </div>
      <ServiceType />
    </div>
  );
};

export default Main;
