import { combineReducers } from 'redux';
import weather from './common/weather/weather.reducer';
import location from './common/location/location.reducer';
import settings from './common/settings/settings.reducer';

const rootReducer = combineReducers({ weather, location, settings });

export default rootReducer;
