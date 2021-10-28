import { Button } from './../../../commons/button/Button';
import { useState } from 'react';

import Modal from '../modal/Modal';
import Specifications from './specifications/Specifications';

import cl from './Instrument.module.css';

const Instrument = ({ image, specifications, dates, instrumentId }) => {
  const [isModal, setModal] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const modal = isModal && (
    <Modal closeModal={closeModal} dates={dates} instrumentId={instrumentId} />
  );

  const showSpecifications = isMouseOver && <Specifications />;

  const altText = 'image not find';

  return (
    <>
      <div className={`${cl.instrument} `}>
        <div
          className={cl.image__container}
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
        >
          {showSpecifications}
          <img className={cl.image} src={image} alt={altText} />
        </div>
        <div className={cl.form}>
          <span className={cl.text}>{specifications.name}</span>
          <Button action={'Зарезервировать'} onClick={openModal} />
        </div>
      </div>
      {modal}
    </>
  );
};

export default Instrument;
