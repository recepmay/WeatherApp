import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import forecast from './forecast';
import select from './select';
import carousel from './carousel';

export default combineReducers({
    forecast,
    select,
    carousel,
    routing: routerReducer
});
