import * as actionCreators from '../actions/actionCreators';
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

/* global describe, it, expect */

describe('actions', () => {
  it('should create an action to add a meal', () => {
    const meal = {
      id: 'abc123',
      name: 'Spaghetti',
      recipeSource: 'Jamie\'s Dinners',
      tags: 'bacon, pasta',
      brunch: true,
      lunch: true,
      dinner: true,
      vegetarian: true,
      lastEaten: '2017-03-01T06:33:07.000Z'
    };
    const expectedAction = {
      type: ADD_MEAL,
      payload: {
        meal
      }
    };
    expect(actionCreators.addMeal(meal)).toEqual(expectedAction);
  });

  it('should create an action to update a meal', () => {
    const id = 'abc123';
    const meal = {
      name: 'Spaghetti',
      recipeSource: 'Jamie\'s Dinners',
      tags: 'bacon, pasta',
      brunch: true,
      lunch: true,
      dinner: true,
      vegetarian: true,
      lastEaten: '2017-03-01T06:33:07.000Z'
    };
    const expectedAction = {
      type: UPDATE_MEAL,
      payload: {
        id,
        meal
      }
    };
    expect(actionCreators.updateMeal(id, meal)).toEqual(expectedAction);
  });

  it('should create an action to delete a meal', () => {
    const id = 'abc123';
    const expectedAction = {
      type: DELETE_MEAL,
      payload: {
        id
      }
    };
    expect(actionCreators.deleteMeal(id)).toEqual(expectedAction);
  });

  it('should create an action to eat a meal', () => {
    const id = 'abc123';
    const timestamp = '2017-03-01T06:33:07.000Z';
    const expectedAction = {
      type: EAT_MEAL,
      payload: {
        id,
        timestamp
      }
    };
    expect(actionCreators.eatMeal(id, timestamp)).toEqual(expectedAction);
  });

  it('should create an action to import data', () => {
    const expectedAction = {
      type: IMPORT_DATA
    };
    expect(actionCreators.importData()).toEqual(expectedAction);
  });

  it('should create an action to export the data', () => {
    const expectedAction = {
      type: EXPORT_DATA
    };
    expect(actionCreators.exportData()).toEqual(expectedAction);
  });

  it('should create an action to reset the data', () => {
    const expectedAction = {
      type: RESET_DATA
    };
    expect(actionCreators.resetData()).toEqual(expectedAction);
  });

  it('should create an action to set the filter', () => {
    const filter = 'Lunch';
    const expectedAction = {
      type: SET_FILTER,
      payload: {
        filter
      }
    };
    expect(actionCreators.setFilter(filter)).toEqual(expectedAction);
  });
});
