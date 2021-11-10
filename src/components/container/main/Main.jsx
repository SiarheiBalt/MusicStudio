import { useSelector } from 'react-redux';

import AuthorizationForm from './../../commons/authForm/AuthorizationForm';
import About from './about/About';
import Contacts from './contacts/Contacts';
import ServiceType from './serviceTypes/ServiceType';
import LogoutForm from '../../commons/authForm/logoutForm/LogoutForm';

import cl from './Main.module.css';

const Main = () => {
  const data = useSelector((state) => state.authReducer);
  const { isAuth, error, registrationMessage } = data;

  const userForm = isAuth ? (
    <LogoutForm />
  ) : (
    <AuthorizationForm
      error={error}
      registrationUserMessage={registrationMessage}
    />
  );

  return (
    <div className={'main'}>
      <div className={cl.information}>
        <About />
        <div className={cl.block__right}>
          <Contacts />
          {userForm}
        </div>
      </div>
      <ServiceType />
    </div>
  );
};

export default Main;
