import { Formik } from 'formik';
import * as yup from 'yup';

import cl from './AuthorizationForm.module.css';

const LoginRegisterationForm = ({ onClick, type, typeForm }) => {
  const typeText = type === typeForm.login ? 'входа' : 'регистрации';

  const titleText = 'Введите данные для ';
  const fieldText = { name: 'Имя', email: 'Email', password: 'Пароль' };
  const submitText = 'Подтвердить';

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationsShema = yup.object().shape({
    name:
      type === typeForm.registration && yup.string().required('Обязательно'),
    password: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Обязательно')
      .min(6, 'Не менее 6 символов'),
    email: yup.string().email('Введите верный email').required('Обязательно'),
  });

  const form = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isValid,
    handleSubmit,
    dirty,
  }) => {
    return (
      <div className={cl.user__form}>
        <h3>
          {titleText}
          {typeText}
        </h3>
        {type === typeForm.registration && (
          <div className={cl.item}>
            <div>
              <label htmlFor={'name'}>{fieldText.name}</label>
              <input
                className={cl.input}
                type={'text'}
                name={'name'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </div>
            {touched.name && errors.name && (
              <span className={cl.error}>{errors.name}</span>
            )}
          </div>
        )}
        <div className={cl.item}>
          <div>
            <label htmlFor={'email'}>{fieldText.email}</label>
            <input
              className={cl.input}
              type={'text'}
              name={'email'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </div>
          {touched.email && errors.email && (
            <span className={cl.error}>{errors.email}</span>
          )}
        </div>
        <div className={cl.item}>
          <div>
            <label htmlFor={'password'}>{fieldText.password}</label>
            <input
              className={cl.input}
              type={'password'}
              name={'password'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </div>
          {touched.password && errors.password && (
            <span className={cl.error}>{errors.password}</span>
          )}
        </div>

        <button
          disabled={!isValid && !dirty}
          onClick={handleSubmit}
          type={'submit'}
        >
          {submitText}
        </button>
      </div>
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onClick(values)}
      validationSchema={validationsShema}
    >
      {form}
    </Formik>
  );
};

export default LoginRegisterationForm;
