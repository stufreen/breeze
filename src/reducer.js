import { combineReducers } from 'redux';
import weather from './common/weather/weather.reducer';

const rootReducer = combineReducers({ weather });

export default rootReducer;
