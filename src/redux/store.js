import createSagaMiddleware from '@redux-saga/core';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducer from './reducers/authReducer';
import reserveInstruments from './reducers/reserveInstrumentsReducer';
import reserveRoom from './reducers/reserveRoomReducer';
import reserveRecord from './reducers/reserveRecordReducer';
import { loginUserSaga, registrationUserSaga } from './sagas/authApi';
import {
  allRoomsSaga,
  dayInRoomSaga,
  reserveRoomSaga,
} from './sagas/roomsApi.js';
import {
  allRecordsSaga,
  dayInRecordSaga,
  reserveRecordSaga,
} from './sagas/recordsApi';
import { cancelUserOrderSaga, userOrdersSaga } from './sagas/profileApi';
import {
  dayInstrumentsSaga,
  instrumentsSaga,
  reserveInstrumentSaga,
} from './sagas/instrumentsApi';
import adminReducer from './reducers/adminReducer';
import { cancelAdminOrderSaga, userOrdersSagaAdmin } from './sagas/adminApi';

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    reserveRoom,
    authReducer,
    reserveInstruments,
    reserveRecord,
    adminReducer,
  }),
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(registrationUserSaga);
sagaMiddleWare.run(loginUserSaga);
sagaMiddleWare.run(instrumentsSaga);
sagaMiddleWare.run(dayInstrumentsSaga);
sagaMiddleWare.run(reserveInstrumentSaga);
sagaMiddleWare.run(userOrdersSagaAdmin);
sagaMiddleWare.run(cancelAdminOrderSaga);

sagaMiddleWare.run(allRoomsSaga);
sagaMiddleWare.run(dayInRoomSaga);
sagaMiddleWare.run(reserveRoomSaga);

sagaMiddleWare.run(allRecordsSaga);
sagaMiddleWare.run(dayInRecordSaga);
sagaMiddleWare.run(reserveRecordSaga);

sagaMiddleWare.run(userOrdersSaga);
sagaMiddleWare.run(cancelUserOrderSaga);

export default store;
