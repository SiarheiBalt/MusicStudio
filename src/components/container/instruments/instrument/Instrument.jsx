import { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from './../../../commons/button/Button';
import Modal from '../modal/Modal';
import Specifications from './specifications/Specifications';

import cl from './Instrument.module.css';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../../../redux/constants';

const altText = 'image not find';
const buttonText = 'Зарезервировать';

const Instrument = ({
  image,
  specifications,
  dates,
  instrumentId,
  name,
  chosenDay,
}) => {
  const dispatch = useDispatch();
  const [isModal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLEAR_CHOSEN_DAY_INSTRUMENT });
    setModal(false);
  };

  const modal = isModal && (
    <Modal
      closeModal={closeModal}
      dates={dates}
      instrumentId={instrumentId}
      instrumentName={name}
      chosenDay={chosenDay}
    />
  );

  return (
    <>
      <div className={cl.instrument}>
        <div className={cl.image__container}>
          <img className={cl.image} src={image} alt={altText} />
          <Specifications specifications={specifications} />;
        </div>
        <div className={cl.form}>
          <span className={cl.text}>{name}</span>
          <Button text={buttonText} action={buttonText} onClick={openModal} />
        </div>
      </div>
      {modal}
    </>
  );
};

Instrument.propTypes = {
  image: PropTypes.string.isRequired,
  specifications: PropTypes.array.isRequired,
  dates: PropTypes.arrayOf(PropTypes.shape),
  instrumentId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Instrument;
