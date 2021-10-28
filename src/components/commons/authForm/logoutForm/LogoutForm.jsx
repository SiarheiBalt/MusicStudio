import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../../../redux/constants';

import { Button } from './../../button/Button';

import './../../../../App.css';
import cl from './LogoutForm.module.css';

const LogoutForm = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: ACTIONS.LOGOUT_USER });
  };

  const buttomText = 'Выйти из профиля';

  return (
    <div className='form'>
      <div className={cl.container}>
        <h2>Информация о пользователе</h2>
        <Button text={buttomText} onClick={logout} />
      </div>
    </div>
  );
};

export default LogoutForm;
