import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import MealItem from './MealItem';

const MealList = (props) => {
  const { deleteMeal, allMeals, navigate } = props;

  return (
    <FlatList
      data={allMeals}
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
  allMeals: []
};

MealList.propTypes = {
  deleteMeal: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  allMeals: PropTypes.arrayOf(PropTypes.object)
};

export default MealList;
