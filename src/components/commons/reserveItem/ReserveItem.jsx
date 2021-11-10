import PropTypes from 'prop-types';
import { useState } from 'react';

import Shedule from '../shedule/Shedule';
import Modal from './modal/Modal';
import DataSelect from '../dateSelect/DateSelect';

import cl from './ReserveItem.module.css';

const ReserveItem = ({ dates, itemInfo, addReserveTime }) => {
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

  const modall = isModal && (
    <Modal
      closeModal={closeModal}
      day={dayForModal}
      itemInfo={itemInfo}
      addReserveTime={addReserveTime}
    />
  );

  return (
    <div className='item'>
      {modall}
      <h2 className={cl.title}> {itemInfo.name}</h2>
      <DataSelect getDateFromPicker={getDateFromPicker} />
      <Shedule timeData={dates} openModal={openModal} />
    </div>
  );
};

ReserveItem.propTypes = {
  dates: PropTypes.arrayOf(PropTypes.shape).isRequired,
  itemInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
  addReserveTime: PropTypes.func.isRequired,
};

export default ReserveItem;
