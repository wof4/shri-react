import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import buildHistoryReducer from './buildHistoryReducer';
import buildSettingsReucer from './buildSettingsReucer';

const reducers = combineReducers({
  buildHistoryReducer,
  buildSettingsReucer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;
