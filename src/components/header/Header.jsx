import cl from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={cl.header}>
      <span className={cl.link}>
        <NavLink to='/main' activeClassName={cl.activ}>
          Главная
        </NavLink>
      </span>
      <span className={cl.link}>
        <NavLink to='/profile' activeClassName={cl.activ}>
          Профиль
        </NavLink>
      </span>
      <span className={cl.link}>
        <NavLink to='/admin' activeClassName={cl.activ}>
          Администратор
        </NavLink>
      </span>
      <span className={cl.link}>
        <NavLink to='/rooms' activeClassName={cl.activ}>
          Комнаты
        </NavLink>
      </span>
      <span className={cl.link}>
        <NavLink to='/instruments' activeClassName={cl.activ}>
          Инструменты
        </NavLink>
      </span>
      <span className={cl.link}>
        <NavLink to='/record' activeClassName={cl.activ}>
          Звукозапись
        </NavLink>
      </span>
    </header>
  );
};

export default Header;
