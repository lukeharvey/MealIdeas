import { combineReducers } from 'redux';

import meals from './meals';
import keyword from './keyword';

const rootReducer = combineReducers({
  meals,
  keyword
});

export default rootReducer;
