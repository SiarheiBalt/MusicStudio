import Shedule from '../shedule/Shedule';
import cl from './ReserveItem.module.css';
import { useState } from 'react';
import Modal from './modal/Modal';

const ReserveItem = ({ dates, name, reserveSubmit, type }) => {
  const [isModal, setIsModal] = useState(false);
  const [dayForModal, setDayForModal] = useState();

  const openModal = (day) => {
    setIsModal(true);
    setDayForModal(day);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div className={cl.room}>
      {isModal && <Modal closeModal={closeModal} day={dayForModal} />}

      <h2 className={cl.title}>Комната {name}</h2>
      <div className={cl.button__container}></div>
      <Shedule timeData={dates} openModal={openModal} />
    </div>
  );
};

export default ReserveItem;
