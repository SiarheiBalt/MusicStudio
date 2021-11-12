import createSagaMiddleware from '@redux-saga/core';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducer from './reducers/authReducer';
import reserveInstruments from './reducers/reserveInstrumentsReducer';
import reserveRoom from './reducers/reserveRoomReducer';
import reserveRecord from './reducers/reserveRecordReducer';
import { loginUserSaga, registrationUserSaga } from './sagas/authSagas';
import { allRoomsSaga } from './sagas/roomsSagas';

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    reserveRoom,
    authReducer,
    reserveInstruments,
    reserveRecord,
  }),
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(registrationUserSaga);
sagaMiddleWare.run(loginUserSaga);
sagaMiddleWare.run(allRoomsSaga);

window.store = store;

export default store;
