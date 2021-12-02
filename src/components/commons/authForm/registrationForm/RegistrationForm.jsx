import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

import cl from './RegistrationForm.module.css';

const titleText = 'Введите данные для регистрации';
const fieldText = { name: 'Имя', email: 'Email', password: 'Пароль' };
const submitText = 'Зарегистрироваться';

const RegisterationForm = ({ submit }) => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationsShema = yup.object().shape({
    name: yup.string().required('Обязательно').min(3, 'Не менее 3 символов'),
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
        <h3 className={cl.title}>{titleText}</h3>
        <div className={cl.item}>
          <div className='field'>
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
        <div className={cl.item}>
          <div className='field'>
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
          <div className='field'>
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
          className={cl.button}
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
      onSubmit={(values) => submit(values)}
      validationSchema={validationsShema}
    >
      {form}
    </Formik>
  );
};

RegisterationForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default RegisterationForm;
