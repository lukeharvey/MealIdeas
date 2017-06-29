import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FlatList } from 'react-native';

import MealItem from './MealItem';

const MealList = (props) => {
  const { deleteMeal, meals, navigate } = props;
  const orderedMeals = meals.allIds
        .map(id => meals.byId[id])
        .sort((a, b) => moment(a.lastEaten) - moment(b.lastEaten));

  return (
    <FlatList
      data={orderedMeals}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <MealItem
          {...item}
          deleteMeal={deleteMeal}
          navigate={navigate}
        />
      )}
    />
  );
};

MealList.defaultProps = {
  meals: {
    byId: {},
    allIds: []
  }
};

MealList.propTypes = {
  deleteMeal: PropTypes.func.isRequired,
  meals: PropTypes.shape({
    byId: PropTypes.object,
    allIds: PropTypes.array
  }),
  navigate: PropTypes.func.isRequired
};

export default MealList;
