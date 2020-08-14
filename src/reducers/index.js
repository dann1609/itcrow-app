import {combineReducers} from 'redux';
import {weatherDetails} from './weatherDetails';

const reducers = combineReducers({
  weatherDetails,
});

export default reducers;
