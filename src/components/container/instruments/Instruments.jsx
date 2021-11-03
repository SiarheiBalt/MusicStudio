import { useSelector } from 'react-redux';
import Instrument from './instrument/Instrument';
import cl from './Instruments.module.css';

const Instruments = () => {
  const data = useSelector((state) => state.reserveInstruments.instruments);

  const instruments = data.map((element, i) => {
    console.log(element);
    return (
      <Instrument
        key={i}
        image={element.image}
        specifications={element.specifications}
      />
    );
  });

  return <div className={cl.instruments}>{instruments}</div>;
};

export default Instruments;
