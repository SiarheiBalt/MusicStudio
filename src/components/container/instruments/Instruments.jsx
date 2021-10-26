import { useSelector } from 'react-redux';
import Instrument from './instrument/Instrument';
import cl from './Instruments.module.css';

const Instruments = () => {
  const data = useSelector((state) => state.reserveInstruments.instruments);

  const instruments = data.map((element, i) => (
    <Instrument
      dates={element.dates}
      key={i}
      image={element.image}
      specifications={element.specifications}
      instrumentId={element.instrumentId}
    />
  ));

  return (
    <>
      <div className={cl.instruments}>{instruments}</div>
    </>
  );
};

export default Instruments;
