import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 16
  },
  copy: {
    fontSize: 16,
    paddingTop: 8
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

const Meal = (props) => {
  const { name, lastEaten, vegetarian } = props;
  const formattedDate = lastEaten ? moment(lastEaten).fromNow() : 'Never';

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.copy}>Last eaten: {formattedDate}</Text>
      <Text style={styles.copy}>Vegetarian: {vegetarian.toString()}</Text>
    </View>
  );
};

Meal.defaultProps = {
  lastEaten: '',
  // recipeUrl: '',
  // tags: [],
  vegetarian: false
};

Meal.propTypes = {
  lastEaten: PropTypes.string,
  name: PropTypes.string.isRequired,
  // recipeUrl: PropTypes.string,
  vegetarian: PropTypes.bool
};

export default Meal;
