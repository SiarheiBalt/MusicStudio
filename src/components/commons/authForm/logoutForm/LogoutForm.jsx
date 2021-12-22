import { useDispatch } from 'react-redux';

import { Button } from './../../button/Button';
import { LOGOUT_USER } from '../../../../redux/constants';

import './../../../../App.css';
import cl from './LogoutForm.module.css';
import { getUserLocalStorage } from '../../../../utils/localStorage';

const LogoutForm = () => {
  const { name } = getUserLocalStorage();

  const titleText = `Выполнен вход пользователя - ${name}`;
  const buttomText = 'Выйти из профиля';

  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: LOGOUT_USER });
  };

  return (
    <div className='form'>
      <div className={cl.container}>
        <h2 className={cl.title}>{titleText}</h2>
        <Button text={buttomText} onClick={logout} />
      </div>
    </div>
  );
};

export default LogoutForm;
