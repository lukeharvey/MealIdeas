import { createSelector } from 'reselect';

const filterSelector = state => state.filter;
const mealsSelector = state => state.meals;

export const filteredMeals = createSelector(
  filterSelector,
  mealsSelector,
  (filter, meals) => {
    const byId = meals.byId;
    let allIds = meals.allIds;

    if (filter === 'vegetarian') {
      allIds = allIds
                .map(id => byId[id])
                .filter(meal => meal.vegetarian === true)
                .map(meal => meal.id);
    }

    return {
      byId,
      allIds
    };
  }
);

export default filteredMeals;
