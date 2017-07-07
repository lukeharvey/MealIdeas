import { combineReducers } from 'redux';

import meals from './meals';
import filter from './filter';

const rootReducer = combineReducers({
  meals,
  filter
});

export default rootReducer;
