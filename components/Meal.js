import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 12
  },
  copy: {
    fontSize: 14,
    paddingTop: 4
  },
  name: {
    fontSize: 16
  }
});

const Meal = (props) => {
  const { lastEaten, name, recipeSource, tags } = props;
  const formattedDate = lastEaten ? moment(lastEaten).fromNow() : 'Never';

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.copy}>Recipe source: {recipeSource}</Text>
      <Text style={styles.copy}>Last eaten: {formattedDate}</Text>
      <Text style={styles.copy}>Tags: {tags}</Text>
    </View>
  );
};

Meal.defaultProps = {
  lastEaten: '',
  recipeSource: '',
  tags: ''
  // vegetarian: false
};

Meal.propTypes = {
  lastEaten: PropTypes.string,
  name: PropTypes.string.isRequired,
  recipeSource: PropTypes.string,
  tags: PropTypes.string
  // vegetarian: PropTypes.bool
};

export default Meal;
