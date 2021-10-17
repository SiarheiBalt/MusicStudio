import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../../../redux/constants';

const LogoutForm = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: ACTIONS.LOGOUT_USER });
  };

  return (
    <div>
      <h2>Информация о пользователе</h2>
      <button onClick={logout}>Выйти из профиля</button>
    </div>
  );
};

export default LogoutForm;
