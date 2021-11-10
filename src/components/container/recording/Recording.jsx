import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ACTIONS } from '../../../redux/constants';
import RecordingTypes from './recordingTypes/RecordingTypes';
import ReserveItem from '../../commons/reserveItem/ReserveItem';

import './../../../App.css';
import cl from './Recording.module.css';

const Recording = () => {
  const data = useSelector((store) => store.reserveRecord.record);
  const dispatch = useDispatch();

  const addReserveTime = (formData) => {
    dispatch({ type: ACTIONS.RESERVE_RECORD, formData });
    dispatch({ type: ACTIONS.ADD_ORDER_IN_USER, formData });
  };

  const reserveItem = data.map((record) => (
    <Route
      key={record.id}
      path={`/${record.name}`}
      render={() => {
        const itemInfo = {
          name: record.name,
          type: 'record',
        };
        return (
          <ReserveItem
            dates={record.dates}
            itemInfo={itemInfo}
            addReserveTime={addReserveTime}
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
          <Redirect to={`/${data[0].name}`} />
        </Route>
        {reserveItem}
      </div>
    </BrowserRouter>
  );
};

export default Recording;
