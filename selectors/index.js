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
      case 'Vegetarian': {
        const filteredIds = allMeals
          .filter(meal => meal.categoryVegetarian === true)
          .map(meal => meal.id);
        return {
          byId,
          allIds: filteredIds
        };
      }
      case 'Meat': {
        const filteredIds = allMeals
          .filter(meal => meal.categoryVegetarian === false)
          .map(meal => meal.id);
        return {
          byId,
          allIds: filteredIds
        };
      }
      case 'Brunch': {
        const filteredIds = allMeals
          .filter(meal => meal.categoryBrunch === true)
          .map(meal => meal.id);
        return {
          byId,
          allIds: filteredIds
        };
      }
      case 'Lunch': {
        const filteredIds = allMeals
          .filter(meal => meal.categoryLunch === true)
          .map(meal => meal.id);
        return {
          byId,
          allIds: filteredIds
        };
      }
      case 'Dinner': {
        const filteredIds = allMeals
          .filter(meal => meal.categoryDinner === true)
          .map(meal => meal.id);
        return {
          byId,
          allIds: filteredIds
        };
      }
      case 'All': {
        return meals;
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
      .sort((a, b) => {
        if (!a || !b) {
          return 0;
        }
        return moment(a.lastEaten) - moment(b.lastEaten);
      })
      .map(meal => meal.id);
    return {
      byId,
      allIds: orderedIds
    };
  }
);

export default getOrderedFilteredMeals;
