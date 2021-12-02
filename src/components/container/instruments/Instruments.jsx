import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { GET_INSTRUMENTS } from '../../../redux/constants';
import Instrument from './instrument/Instrument';
import cl from './Instruments.module.css';

const Instruments = () => {
  const { instruments, chosenDay, serverMessage, error } = useSelector(
    (state) => state.reserveInstruments
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_INSTRUMENTS });
  }, [dispatch]);

  if (!instruments) return <></>; // Preloader

  const instrumentComponents = instruments.map((instrument, i) => {
    const { dates, instrumentId, image, specifications, name } = instrument;
    return (
      <Instrument
        dates={dates}
        key={instrumentId}
        image={image}
        specifications={specifications}
        instrumentId={instrumentId}
        name={name}
        chosenDay={chosenDay}
        serverMessage={serverMessage}
        error={error}
      />
    );
  });

  return (
    <>
      <div className={cl.instruments}>{instrumentComponents}</div>
    </>
  );
};

export default Instruments;
