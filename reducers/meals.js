import { combineReducers } from 'redux';
import {
  ADD_MEAL,
  DELETE_MEAL,
  EAT_MEAL,
  UPDATE_MEAL,
  LOAD_SAMPLE_DATA,
  RESET_DATA
} from '../actions/actionConstants';
import sampleData from '../sample-data';

const mealsById = (state = {}, action) => {
  switch (action.type) {
    case ADD_MEAL: {
      const { meal } = action.payload;
      // return the new state with the new meal
      return {
        // copy the state
        ...state,
        // add new meal to the state
        [meal.id]: {
          id: meal.id,
          lastEaten: meal.lastEaten,
          name: meal.name,
          recipeSource: meal.recipeSource,
          tags: meal.tags,
          vegetarian: meal.vegetarian
        }
      };
    }
    case DELETE_MEAL: {
      const { id } = action.payload;
      // make a copy of the state object
      const stateCopy = Object.assign({}, state);
      // delete the chosen meal
      delete stateCopy[id];
      // save the state as the new state object
      return stateCopy;
    }
    case EAT_MEAL: {
      const { id, timestamp } = action.payload;
      return {
        // copy the state
        ...state,
        // update the chosen meal
        [id]: {
          // copy the existing meal properties
          ...state[id],
          // update the last eaten timestamp
          lastEaten: timestamp
        }
      };
    }
    case UPDATE_MEAL: {
      const { id, meal } = action.payload;
      return {
        // copy the existing state
        ...state,
        [id]: {
          // copy the existing chosen meal properties
          ...state[id],
          // update the meal properties
          lastEaten: meal.lastEaten,
          name: meal.name,
          recipeSource: meal.recipeSource,
          tags: meal.tags,
          vegetarian: meal.vegetarian
        }
      };
    }
    case LOAD_SAMPLE_DATA: {
      return sampleData.byId;
    }
    case RESET_DATA: {
      return {};
    }
    default: {
      return state;
    }
  }
};

const mealsAllIds = (state = [], action) => {
  switch (action.type) {
    case ADD_MEAL: {
      const { meal } = action.payload;
      return [...state, meal.id];
    }
    case DELETE_MEAL: {
      const { id } = action.payload;
      return state.filter(item => item !== id);
    }
    case LOAD_SAMPLE_DATA: {
      return sampleData.allIds;
    }
    case RESET_DATA: {
      return [];
    }
    default:
      return state;
  }
};

const meals = combineReducers({
  byId: mealsById,
  allIds: mealsAllIds
});

export default meals;
