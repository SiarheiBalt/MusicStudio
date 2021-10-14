import createSagaMiddleware from '@redux-saga/core';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducer from './reducers/authReducer';
import reserveTime from './reducers/reserveTimeReducer';
import { registrationUserSaga } from './sagas/authSagas';

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    reserveTime,
    authReducer,
  }),
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(registrationUserSaga);

window.store = store;

export default store;
