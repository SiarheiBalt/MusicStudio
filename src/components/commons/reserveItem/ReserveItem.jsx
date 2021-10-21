import Shedule from '../shedule/Shedule';
import cl from './ReserveItem.module.css';
import { useState } from 'react';
import Modal from './modal/Modal';
import DataSelect from '../dateSelect/DateSelect';

const ReserveItem = ({ dates, itemInfo }) => {
  const [isModal, setIsModal] = useState(false);
  const [dayForModal, setDayForModal] = useState({});

  const openModal = (day) => {
    setIsModal(true);
    setDayForModal(day);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const getDateFromPicker = (date) => {
    const dayFromPicker = dates.filter(
      (element) =>
        element.date === date.date &&
        element.month === date.month &&
        element.year === date.year
    );

    if (dayFromPicker.length === 1) {
      const day = dayFromPicker[0];
      setDayForModal(day);
      setIsModal(true);
    }
  };

  return (
    <div className={cl.room}>
      {isModal && (
        <Modal closeModal={closeModal} day={dayForModal} itemInfo={itemInfo} />
      )}

      <h2 className={cl.title}> {itemInfo.name}</h2>
      <DataSelect getDateFromPicker={getDateFromPicker} />
      <Shedule timeData={dates} openModal={openModal} />
    </div>
  );
};

export default ReserveItem;
