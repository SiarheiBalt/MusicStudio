import { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from './../../../commons/button/Button';
import Modal from '../modal/Modal';
import Specifications from './specifications/Specifications';

import cl from './Instrument.module.css';

const Instrument = ({ image, specifications, dates, instrumentId, name }) => {
  const [isModal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const modal = isModal && (
    <Modal closeModal={closeModal} dates={dates} instrumentId={instrumentId} />
  );

  const altText = 'image not find';
  const buttonText = 'Зарезервировать';

  return (
    <>
      <div className={`${cl.instrument} `}>
        <div className={cl.image__container}>
          <img className={cl.image} src={image} alt={altText} />
          <Specifications specifications={specifications} />;
        </div>
        <div className={cl.form}>
          <span className={cl.text}>{name}</span>
          <Button action={buttonText} onClick={openModal} />
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
