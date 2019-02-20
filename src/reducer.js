import { combineReducers } from 'redux';
import weather from './common/weather/weather.reducer';
import location from './common/location/location.reducer';

const rootReducer = combineReducers({ weather, location });

export default rootReducer;
