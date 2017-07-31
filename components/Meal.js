import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'dodgerblue',
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
  const {
    eatMeal,
    id,
    name,
    lastEaten,
    recipeAuthor,
    recipeBook,
    recipePage,
    recipeUrl,
    categoryBrunch,
    categoryLunch,
    categoryDinner,
    categoryVegetarian,
    tags
  } = props;
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
      {recipeAuthor.length > 0 && <Text style={styles.copy}>Author: {recipeAuthor}</Text>}
      {recipeBook.length > 0 && <Text style={styles.copy}>Book: {recipeBook}</Text>}
      {recipePage.length > 0 && <Text style={styles.copy}>Page: {recipePage}</Text>}
      {recipeUrl.length > 0 && <Text style={styles.copy}>URL: {recipeUrl}</Text>}
      {tags.length > 0 && <Text style={styles.copy}>Tags: {tags}</Text>}
      <Text style={styles.copy}>Brunch: {categoryBrunch ? 'Yes' : 'No'}</Text>
      <Text style={styles.copy}>Lunch: {categoryLunch ? 'Yes' : 'No'}</Text>
      <Text style={styles.copy}>Dinner: {categoryDinner ? 'Yes' : 'No'}</Text>
      <Text style={styles.copy}>Vegetarian: {categoryVegetarian ? 'Yes' : 'No'}</Text>
      <TouchableOpacity onPress={() => eatMeal(id, timestamp)}>
        <Text style={styles.button}>I ate this today!</Text>
      </TouchableOpacity>
    </View>
  );
};

Meal.propTypes = {
  eatMeal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastEaten: PropTypes.string,
  recipeAuthor: PropTypes.string,
  recipeBook: PropTypes.string,
  recipePage: PropTypes.string,
  recipeUrl: PropTypes.string,
  categoryBrunch: PropTypes.bool,
  categoryLunch: PropTypes.bool,
  categoryDinner: PropTypes.bool,
  categoryVegetarian: PropTypes.bool,
  tags: PropTypes.string
};

Meal.defaultProps = {
  lastEaten: '',
  recipeAuthor: '',
  recipeBook: '',
  recipePage: '',
  recipeUrl: '',
  categoryBrunch: false,
  categoryLunch: false,
  categoryDinner: false,
  categoryVegetarian: false,
  tags: ''
};

export default Meal;
