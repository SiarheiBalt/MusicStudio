import cl from './NoPage.module.css';

const title = '404';
const text = 'Страница не найдена';

const NoPage = () => {
  return (
    <div className={cl.container}>
      <div className={cl.wrapper}>
        <h1 className={cl.title}>{title}</h1>
        <span className={cl.text}>{text}</span>
      </div>
    </div>
  );
};

export default NoPage;
