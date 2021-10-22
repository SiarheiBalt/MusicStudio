import { Formik } from 'formik';
import * as yup from 'yup';
import cl from './AuthorizationForm.module.css';

const LoginRegisterationForm = ({ onClick, type, typeForm }) => {
  const validationsShema = yup.object().shape({
    name:
      type === typeForm.registration &&
      yup.string().typeError('Должно быть строкой').required('Обязательно'),
    password: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Обязательно')
      .min(6, 'Не менее 6 символов'),
    email: yup.string().email('Введите верный email').required('Обязательно'),
  });
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validateOnBlur
      onSubmit={(values) => {
        onClick(values);
        for (const key in values) {
          values[key] = '';
        }
      }}
      validationSchema={validationsShema}
    >
      {({
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
              Введите данные для{' '}
              {type === typeForm.login ? 'входа' : 'регистрации'}
            </h3>
            {type === typeForm.registration && (
              <div className={cl.item}>
                <div>
                  <label htmlFor={'name'}>Имя</label>
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
                <label htmlFor={'email'}>Email</label>
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
                <label htmlFor={'password'}>Пароль</label>
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
              Подтвердить
            </button>
          </div>
        );
      }}
    </Formik>
  );
};

export default LoginRegisterationForm;
