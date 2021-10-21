import AuthorizationForm from './../../commons/authForm/AuthorizationForm';
import About from './about/About';
import Contacts from './contacts/Contacts';
import cl from './Main.module.css';
import ServiceType from './serviceTypes/ServiceType';

const Main = () => {
  return (
    <div className={'main'}>
      <div className={cl.information}>
        <About />
        <div className={cl.block__right}>
          <Contacts />
          <AuthorizationForm />
        </div>
      </div>
      <ServiceType />
    </div>
  );
};

export default Main;
