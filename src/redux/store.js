import { createStore, combineReducers } from 'redux';
import reserveTime from './reducers/reserveTimeReducer';

const store = createStore(
  combineReducers({
    reserveTime,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;
