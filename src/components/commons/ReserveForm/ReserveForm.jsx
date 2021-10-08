import cl from './ReserveForm.module.css';

const ReserveForm = () => {
  return (
    <div>
      <h3 className={cl.title}>Зарезервировать время</h3>
      <div>
        <h4 className={cl.title}>Выберите время</h4>
      </div>
    </div>
  );
};

export default ReserveForm;
