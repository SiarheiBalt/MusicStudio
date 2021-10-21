import RecordingTypes from './recordingTypes/RecordingTypes';
import cl from './Recording.module.css';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ReserveItem from '../commons/reserveItem/ReserveItem';

const Recording = () => {
  const data = useSelector((store) => store.reserveTime.record);

  const reserveItem = data.map((record, i) => (
    <Route
      key={i}
      path={`/${record.name}`}
      render={() => {
        const itemInfo = {
          name: record.name,
          type: 'record',
        };
        return <ReserveItem key={i} dates={record.dates} itemInfo={itemInfo} />;
      }}
    ></Route>
  ));

  return (
    <BrowserRouter>
      <div className={cl.recording}>
        <RecordingTypes />

        <Route exact path="/record">
          <Redirect to={`/${data[0].name}`} />
        </Route>
        {reserveItem}
      </div>
    </BrowserRouter>
  );
};

export default Recording;
