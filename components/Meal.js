import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'mediumseagreen',
    color: 'white',
    fontSize: 16,
    height: 50,
    lineHeight: 50,
    marginTop: 32,
    textAlign: 'center'
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  copy: {
    fontSize: 14,
    paddingTop: 16
  },
  header: {
    paddingBottom: 12
  },
  lastEaten: {
    color: 'dodgerblue',
    fontSize: 14,
    paddingTop: 8
  },
  name: {
    fontSize: 24
  }
});

const Meal = (props) => {
  const { eatMeal, id, lastEaten, name, recipeSource, tags, vegetarian } = props;
  const timestamp = new Date().toISOString();
  const formatDate = (date) => {
    if (!date) {
      return 'Never';
    } else if (moment().diff(date, 'days') >= 1) {
      return moment(date).fromNow();
    }

    return moment(date).calendar().split(' ')[0];
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.lastEaten}>Last eaten: {formatDate(lastEaten)}</Text>
      </View>
      {recipeSource.length > 0 && <Text style={styles.copy}>Recipe source: {recipeSource}</Text>}
      {tags.length > 0 && <Text style={styles.copy}>Tags: {tags}</Text>}
      {vegetarian && <Text style={styles.copy}>Vegetarian</Text>}
      <TouchableHighlight onPress={() => eatMeal(id, timestamp)}>
        <Text style={styles.button}>I ate this today!</Text>
      </TouchableHighlight>
    </View>
  );
};

Meal.propTypes = {
  eatMeal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  lastEaten: PropTypes.string,
  name: PropTypes.string.isRequired,
  recipeSource: PropTypes.string,
  tags: PropTypes.string,
  vegetarian: PropTypes.bool
};

Meal.defaultProps = {
  lastEaten: '',
  recipeSource: '',
  tags: '',
  vegetarian: false
};

export default Meal;
