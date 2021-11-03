import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../../../redux/constants';

import { Button } from './../../button/Button';

import './../../../../App.css';
import cl from './LogoutForm.module.css';

const buttomText = 'Выйти из профиля';
const titleText = 'Информация о пользователе';

const LogoutForm = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: ACTIONS.LOGOUT_USER });
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
