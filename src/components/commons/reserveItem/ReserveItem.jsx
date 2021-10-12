import { useState } from 'react';
import { Button } from '../button/Button';
import ReserveForm from '../ReserveForm/ReserveForm';
import Shedule from '../shedule/Shedule';
import cl from './ReserveItem.module.css';

const ReserveItem = ({ dates, name, reserveSubmit, type }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const changeStatusForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className={cl.room}>
      <h2 className={cl.title}>Комната {name}</h2>
      <div className={cl.button__container}>
        <Button
          action={
            isFormOpen
              ? 'Закрыть форму для резервирования'
              : 'Открыть форму для резервирования'
          }
          onClick={changeStatusForm}
        />
      </div>
      <Shedule timeData={dates} />
      {isFormOpen && (
        <ReserveForm reserveSubmit={reserveSubmit} name={name} type={type} />
      )}
    </div>
  );
};

export default ReserveItem;
