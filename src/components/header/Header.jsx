import { NavLink } from 'react-router-dom';

import cl from './Header.module.css';

const Header = () => {
  const main = 'Главная';
  const profile = 'Профиль';
  const admin = 'Администратор';
  const rooms = 'Комнаты';
  const instruments = 'Инструменты';
  const soundRecord = 'Звукозапись';

  return (
    <div className={'app-container'}>
      <div className={cl.hamburger__menu}>
        <input id={cl.menu__toggle} type='checkbox' />
        <label className={cl.menu__btn} htmlFor={cl.menu__toggle}>
          <span></span>
        </label>

        <header className={`${cl.header} ${cl.menu__box}`}>
          <span className={cl.link}>
            <NavLink to='/main' activeClassName={cl.activ}>
              {main}
            </NavLink>
          </span>
          <span className={cl.link}>
            <NavLink to='/rooms' activeClassName={cl.activ}>
              {rooms}
            </NavLink>
          </span>
          <span className={cl.link}>
            <NavLink to='/instruments' activeClassName={cl.activ}>
              {instruments}
            </NavLink>
          </span>
          <span className={cl.link}>
            <NavLink to='/record' activeClassName={cl.activ}>
              {soundRecord}
            </NavLink>
          </span>
          <span className={cl.link}>
            <NavLink to='/profile' activeClassName={cl.activ}>
              {profile}
            </NavLink>
          </span>
          <span className={cl.link}>
            <NavLink to='/admin' activeClassName={cl.activ}>
              {admin}
            </NavLink>
          </span>
        </header>
      </div>
    </div>
  );
};

export default Header;
