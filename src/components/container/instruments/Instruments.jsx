import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ACTIONS } from '../../../redux/constants';
import Instrument from './instrument/Instrument';
import cl from './Instruments.module.css';

const Instruments = () => {
  const data = useSelector((state) => state.reserveInstruments.instruments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_INSTRUMENTS });
  }, [dispatch]);

  const instruments = data.map((element, i) => (
    <Instrument
      dates={element.dates}
      key={element.instrumentId}
      image={element.image}
      specifications={element.specifications}
      instrumentId={element.instrumentId}
      name={element.name}
    />
  ));

  return (
    <>
      <div className={cl.instruments}>{instruments}</div>
    </>
  );
};

export default Instruments;
