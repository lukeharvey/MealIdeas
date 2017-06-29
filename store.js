import { createStore } from 'redux';

import rootReducer from './reducers/index';

import sampleData from './sample-data';

const defaultState = {
  meals: sampleData
};

const store = createStore(
  rootReducer,
  defaultState
);

export default store;
