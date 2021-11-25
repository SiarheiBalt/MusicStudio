import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { ACTIONS } from '../../../redux/constants';
import ReserveItem from '../../commons/reserveItem/ReserveItem';
import RecordingTypes from './recordingTypes/RecordingTypes';
import Preloader from '../../commons/preloader/Preloader';

import './../../../App.css';
import cl from './Recording.module.css';

const Recording = () => {
  const { records, chosenDay, serverMessage, error } = useSelector(
    (store) => store.reserveRecord
  );
  const dispatch = useDispatch();

  const addReserveTime = (formData) => {
    dispatch({ type: ACTIONS.RESERVE_RECORD, formData });
  };

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_RECORDS });
  }, [dispatch]);

  if (!records) {
    return <Preloader height={'100vh'} />;
  }

  const reserveItem = records.map((record) => (
    <Route
      key={record.id}
      path={`/${record.name}`}
      render={() => {
        const itemInfo = {
          name: record.name,
          type: 'records',
        };
        return (
          <ReserveItem
            dates={record.dates}
            itemInfo={itemInfo}
            chosenDay={chosenDay}
            addReserveTime={addReserveTime}
            serverMessage={serverMessage}
            error={error}
          />
        );
      }}
    ></Route>
  ));

  return (
    <BrowserRouter>
      <div className={`${cl.recording} form`}>
        <RecordingTypes />
        <Route exact path='/record'>
          <Redirect to={`/${records[0].name}`} />
        </Route>
        {reserveItem}
      </div>
    </BrowserRouter>
  );
};

export default Recording;
