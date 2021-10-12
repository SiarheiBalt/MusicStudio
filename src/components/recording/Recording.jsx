import RecordingTypes from './recordingTypes/RecordingTypes';
import cl from './Recording.module.css';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ReserveItem from '../commons/reserveItem/ReserveItem';
import { ACTIONS } from '../../redux/constants';

const Recording = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.reserveTime.record);

  const reserveSubmit = (formData) => {
    dispatch({ type: ACTIONS.RESERVE_ROOM, formData });
  };

  return (
    <BrowserRouter>
      <div className={cl.recording}>
        <RecordingTypes />

        <Route exact path='/record'>
          <Redirect to={`/${data[0].name}`} />
        </Route>

        {data.map((record, i) => (
          <Route
            key={i}
            path={`/${record.name}`}
            render={() => (
              <ReserveItem
                key={i}
                dates={record.dates}
                name={record.name}
                reserveSubmit={reserveSubmit}
                type={'record'}
              />
            )}
          />
        ))}
      </div>
    </BrowserRouter>
  );
};

export default Recording;
