import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ACTIONS } from '../../../redux/constants';
import Instrument from './instrument/Instrument';
import cl from './Instruments.module.css';

const Instruments = () => {
  const { instruments, chosenDay, serverMessage, error } = useSelector(
    (state) => state.reserveInstruments
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_INSTRUMENTS });
  }, [dispatch]);

  if (!instruments) return <></>; // Preloader

  const instrumentComponents = instruments.map((instrument, i) => (
    <Instrument
      dates={instrument.dates}
      key={instrument.instrumentId}
      image={instrument.image}
      specifications={instrument.specifications}
      instrumentId={instrument.instrumentId}
      name={instrument.name}
      chosenDay={chosenDay}
      serverMessage={serverMessage}
      error={error}
    />
  ));

  return (
    <>
      <div className={cl.instruments}>{instrumentComponents}</div>
    </>
  );
};

export default Instruments;
