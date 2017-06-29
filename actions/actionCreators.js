import {
  ADD_MEAL,
  DELETE_MEAL,
  EAT_MEAL,
  UPDATE_MEAL,
  LOAD_SAMPLE_DATA,
  RESET_DATA,
  SET_KEYWORD
} from './actionConstants';

// add meal
export const addMeal = meal => ({
  type: ADD_MEAL,
  payload: {
    meal
  }
});

// update meal
export const updateMeal = (id, meal) => ({
  type: UPDATE_MEAL,
  payload: {
    id,
    meal
  }
});

// delete meal
export const deleteMeal = id => ({
  type: DELETE_MEAL,
  payload: {
    id
  }
});

// eat meal
export const eatMeal = (id, moment) => ({
  type: EAT_MEAL,
  payload: {
    id,
    lastEaten: moment
  }
});

// load sample data
export const loadSampleData = () => ({
  type: LOAD_SAMPLE_DATA
});

// delete all data
export const resetData = () => ({
  type: RESET_DATA
});

// set filter keyword
export const setKeyword = keyword => ({
  type: SET_KEYWORD,
  payload: {
    keyword
  }
});

export default addMeal;
