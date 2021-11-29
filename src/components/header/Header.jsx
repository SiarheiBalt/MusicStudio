import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import cl from './Header.module.css';

const main = 'Главная';
const profile = 'Профиль';
const admin = 'Администратор';
const rooms = 'Комнаты';
const instruments = 'Инструменты';
const soundRecord = 'Звукозапись';

const Header = () => {
  const { isAdmin } = useSelector((store) => store.authReducer);

  const adminPageLink = isAdmin && (
    <span className={cl.link}>
      <NavLink to='/admin' activeClassName={cl.activ}>
        {admin}
      </NavLink>
    </span>
  );

  return (
    <div className={'app-container'}>
      <header className={cl.header}>
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
        {adminPageLink}
      </header>
    </div>
  );
};

export default Header;
