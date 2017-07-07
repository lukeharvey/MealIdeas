import { createSelector } from 'reselect';

const getMeals = state => state.meals;
const getFilter = state => state.filter;

export const filteredMeals = createSelector(
  [getMeals, getFilter],
  (meals, filter) => {
    switch (filter) {
      case 'vegetarian': {
        const { byId, allIds } = meals;
        const filteredAllIds = allIds
          .slice()
          .map(id => byId[id])
          .filter(meal => meal.vegetarian === true)
          .map(meal => meal.id);
        return {
          byId,
          allIds: filteredAllIds
        };
      }
      case 'brunch': {
        const { byId, allIds } = meals;
        const filteredAllIds = allIds
          .slice()
          .map(id => byId[id])
          .filter(meal => meal.brunch === true)
          .map(meal => meal.id);
        return {
          byId,
          allIds: filteredAllIds
        };
      }
      case 'lunch': {
        const { byId, allIds } = meals;
        const filteredAllIds = allIds
          .slice()
          .map(id => byId[id])
          .filter(meal => meal.lunch === true)
          .map(meal => meal.id);
        return {
          byId,
          allIds: filteredAllIds
        };
      }
      case 'dinner': {
        const { byId, allIds } = meals;
        const filteredAllIds = allIds
          .slice()
          .map(id => byId[id])
          .filter(meal => meal.dinner === true)
          .map(meal => meal.id);
        return {
          byId,
          allIds: filteredAllIds
        };
      }
      default: {
        return meals;
      }
    }
  }
);

export default filteredMeals;
