import { combineReducers } from 'redux';
import {
  ADD_MEAL,
  DELETE_MEAL,
  EAT_MEAL,
  UPDATE_MEAL,
  IMPORT_DATA,
  EXPORT_DATA,
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
          name: meal.name,
          lastEaten: meal.lastEaten,
          recipeAuthor: meal.recipeAuthor,
          recipeBook: meal.recipeBook,
          recipePage: meal.recipePage,
          recipeUrl: meal.recipeUrl,
          categoryBrunch: meal.categoryBrunch,
          categoryLunch: meal.categoryLunch,
          categoryDinner: meal.categoryDinner,
          categoryVegetarian: meal.categoryVegetarian,
          tags: meal.tags
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
          name: meal.name,
          lastEaten: meal.lastEaten,
          recipeAuthor: meal.recipeAuthor,
          recipeBook: meal.recipeBook,
          recipePage: meal.recipePage,
          recipeUrl: meal.recipeUrl,
          categoryBrunch: meal.categoryBrunch,
          categoryLunch: meal.categoryLunch,
          categoryDinner: meal.categoryDinner,
          categoryVegetarian: meal.categoryVegetarian,
          tags: meal.tags
        }
      };
    }
    case IMPORT_DATA: {
      return sampleData.byId;
    }
    case EXPORT_DATA: {
      console.log(state);
      return state;
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
    case IMPORT_DATA: {
      return sampleData.allIds;
    }
    case EXPORT_DATA: {
      console.log(state);
      return state;
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
