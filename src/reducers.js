import { combineReducers } from 'redux';
import locations from './common/locations/locations.reducer';
import settings from './common/settings/settings.reducer';

const rootReducer = combineReducers({ locations, settings });

export default rootReducer;
