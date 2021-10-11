import { createStore, combineReducers } from 'redux';
import reserveRoomReducer from './reducers/reserveRoomReducer';

const store = createStore(
  combineReducers({
    reserveRoomReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;
