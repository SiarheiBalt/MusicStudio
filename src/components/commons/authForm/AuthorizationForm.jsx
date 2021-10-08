import cl from './authorizationForm.module.css';
import { Button } from './../button/Button';
import { Input } from './../input/Input';

const AuthorizationForm = () => {
  return (
    <div className={cl.form}>
      <h3 className={cl.title}>Войти в приложение</h3>
      <div className={cl.user}>
        <span>Login</span> <Input />
        <span>Password</span> <Input />
        <Button action={'Подтвердить'} />
        <Button action={'Зарегистрироваться'} />
      </div>
    </div>
  );
};

export default AuthorizationForm;
