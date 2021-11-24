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

  const instrumentsData = instruments.map((element, i) => (
    <Instrument
      dates={element.dates}
      key={element.instrumentId}
      image={element.image}
      specifications={element.specifications}
      instrumentId={element.instrumentId}
      name={element.name}
      chosenDay={chosenDay}
      serverMessage={serverMessage}
      error={error}
    />
  ));

  return (
    <>
      <div className={cl.instruments}>{instrumentsData}</div>
    </>
  );
};

export default Instruments;
