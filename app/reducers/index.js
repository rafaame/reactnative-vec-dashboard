import { combineReducers } from 'redux';

import * as dashboardReducers from './dashboard';
import * as generalReducers from './general';
import * as advancedReducers from './advanced';

export default combineReducers(Object.assign(
    dashboardReducers,
    generalReducers,
    advancedReducers
));
