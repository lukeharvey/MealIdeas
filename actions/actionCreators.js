import {
  ADD_MEAL,
  DELETE_MEAL,
  EAT_MEAL,
  UPDATE_MEAL,
  IMPORT_DATA,
  EXPORT_DATA,
  RESET_DATA,
  SET_FILTER
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
export const eatMeal = (id, timestamp) => ({
  type: EAT_MEAL,
  payload: {
    id,
    timestamp
  }
});

// import data from file
export const importData = () => ({
  type: IMPORT_DATA
});

// export data to file
export const exportData = () => ({
  type: EXPORT_DATA
});

// delete all data
export const resetData = () => ({
  type: RESET_DATA
});

// set filter
export const setFilter = filter => ({
  type: SET_FILTER,
  payload: {
    filter
  }
});

export default addMeal;
