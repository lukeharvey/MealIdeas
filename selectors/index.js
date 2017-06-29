import { createSelector } from 'reselect';

const keywordSelector = state => state.keyword;
const mealsSelector = state => state.meals;

export const mealsFilteredByKeyword = createSelector(
  keywordSelector,
  mealsSelector,
  (keyword, meals) => {
    const byId = meals.byId;
    let allIds = meals.allIds;

    if (keyword.length > 0) {
      allIds = allIds
                .map(id => byId[id])
                .filter(meal => meal.name.toLowerCase().includes(keyword))
                .map(meal => meal.id);
    }

    return {
      byId,
      allIds
    };
  }
);

export default mealsFilteredByKeyword;
