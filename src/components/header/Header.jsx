import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import cl from './Header.module.css';

const Header = () => {
  const main = 'Главная';
  const profile = 'Профиль';
  const admin = 'Администратор';
  const rooms = 'Комнаты';
  const instruments = 'Инструменты';
  const soundRecord = 'Звукозапись';

  const [checked, setChecked] = useState(false);

  const onChangeInput = () => {
    setChecked(!checked);
  };

  const { isAdmin } = useSelector((store) => store.authReducer);

  const closeMenu = () => {
    setChecked(false);
  };

  const adminPageLink = isAdmin && (
    <span className={cl.link} onClick={closeMenu}>
      <NavLink to='/admin' activeClassName={cl.activ}>
        {admin}
      </NavLink>
    </span>
  );

  return (
    <div className={'app-container'}>
      <div className={cl.hamburger__menu}>
        <input
          id={cl.menu__toggle}
          type='checkbox'
          checked={checked}
          onChange={onChangeInput}
        />
        <label className={cl.menu__btn} htmlFor={cl.menu__toggle}>
          <span className={'button'}></span>
        </label>

        <header className={`${cl.header} ${cl.menu__box}`}>
          <span className={cl.link}>
            <NavLink to='/main' activeClassName={cl.activ} onClick={closeMenu}>
              {main}
            </NavLink>
          </span>
          <span className={cl.link}>
            <NavLink to='/rooms' activeClassName={cl.activ} onClick={closeMenu}>
              {rooms}
            </NavLink>
          </span>
          <span className={cl.link}>
            <NavLink
              to='/instruments'
              activeClassName={cl.activ}
              onClick={closeMenu}
            >
              {instruments}
            </NavLink>
          </span>
          <span className={cl.link}>
            <NavLink
              to='/record'
              activeClassName={cl.activ}
              onClick={closeMenu}
            >
              {soundRecord}
            </NavLink>
          </span>
          <span className={cl.link}>
            <NavLink
              to='/profile'
              activeClassName={cl.activ}
              onClick={closeMenu}
            >
              {profile}
            </NavLink>
          </span>
          {adminPageLink}
        </header>
      </div>
    </div>
  );
};

export default Header;
