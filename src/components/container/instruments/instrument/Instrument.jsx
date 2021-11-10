import cl from './Instrument.module.css';
import { Button } from './../../../commons/button/Button';

const Instrument = ({ image, specifications }) => {
  const altText = 'image not find';

  return (
    <div className={`${cl.instrument} `}>
      <div className={cl.image__container}>
        <img className={cl.image} src={image} alt={altText} />
      </div>
      <div className={cl.form}>
        <span className={cl.text}>{specifications.name}</span>
        <Button action={'Зарезервировать'} />
      </div>
    </div>
  );
};

export default Instrument;
