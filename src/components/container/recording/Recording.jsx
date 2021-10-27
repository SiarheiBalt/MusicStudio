import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import RecordingTypes from './recordingTypes/RecordingTypes';
import ReserveItem from '../../commons/reserveItem/ReserveItem';

import './../../../App.css';

const Recording = () => {
  const data = useSelector((store) => store.reserveTime.record);

  const reserveItem = data.map((record, i) => (
    <Route
      key={Math.random().toString(36).substr(2, 9)}
      path={`/${record.name}`}
      render={() => {
        const itemInfo = {
          name: record.name,
          type: 'record',
        };
        return (
          <ReserveItem
            key={Math.random().toString(36).substr(2, 9)}
            dates={record.dates}
            itemInfo={itemInfo}
          />
        );
      }}
    ></Route>
  ));

  return (
    <BrowserRouter>
      <div className={`recording form`}>
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
