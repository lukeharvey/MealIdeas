import { createSelector } from 'reselect';
import moment from 'moment';

const getMeals = state => state.meals;
const getFilter = state => state.filter;

export const getFilteredMeals = createSelector(
  [getMeals, getFilter],
  (meals, filter) => {
    const { byId, allIds } = meals;
    const allMeals = allIds.map(id => byId[id]);
    switch (filter) {
      case 'vegetarian': {
        const filteredIds = allMeals
          .filter(meal => meal.vegetarian === true)
          .map(meal => meal.id);
        return {
          byId,
          allIds: filteredIds
        };
      }
      case 'brunch': {
        const filteredIds = allMeals
          .filter(meal => meal.brunch === true)
          .map(meal => meal.id);
        return {
          byId,
          allIds: filteredIds
        };
      }
      case 'lunch': {
        const filteredIds = allMeals
          .filter(meal => meal.lunch === true)
          .map(meal => meal.id);
        return {
          byId,
          allIds: filteredIds
        };
      }
      case 'dinner': {
        const filteredIds = allMeals
          .filter(meal => meal.dinner === true)
          .map(meal => meal.id);
        return {
          byId,
          allIds: filteredIds
        };
      }
      default: {
        return meals;
      }
    }
  }
);

export const getOrderedFilteredMeals = createSelector(
  getFilteredMeals,
  (meals) => {
    const { byId, allIds } = meals;
    const allMeals = allIds.map(id => byId[id]);
    const orderedIds = allMeals
      .sort((a, b) => moment(a.lastEaten) - moment(b.lastEaten))
      .map(meal => meal.id);
    return {
      byId,
      allIds: orderedIds
    };
  }
);

export default getOrderedFilteredMeals;
