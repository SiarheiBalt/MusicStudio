import { createStore, combineReducers } from 'redux';
import reserveTimeReducer from './reducers/reserveTimeReducer';

const store = createStore(
  combineReducers({
    reserveTimeReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;
