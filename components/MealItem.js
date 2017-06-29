import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Swipeout from 'react-native-swipeout';

const styles = StyleSheet.create({
  lastEaten: {
    color: 'dodgerblue',
    fontSize: 14,
    paddingTop: 2
  },
  item: {
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    borderStyle: 'solid',
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  name: {
    fontSize: 16
  }
});

const MealItem = (props) => {
  const { deleteMeal, id, lastEaten, name, navigate } = props;
  const formatDate = (date) => {
    if (!date) {
      return 'Never';
    } else if (moment().diff(date, 'days') >= 1) {
      return moment(date).fromNow();
    }

    return moment(date).calendar().split(' ')[0];
  };

  const swipeoutBtns = [
    {
      backgroundColor: 'dodgerblue',
      onPress: () => navigate('EditMeal', { id }),
      text: 'Edit'
    },
    {
      backgroundColor: 'orangered',
      onPress: () => deleteMeal(id),
      text: 'Delete'
    }
  ];

  return (
    <Swipeout
      autoClose
      right={swipeoutBtns}
    >
      <TouchableHighlight onPress={() => navigate('Meal', { id, name })}>
        <View style={styles.item}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.lastEaten}>Last eaten: {formatDate(lastEaten)}</Text>
        </View>
      </TouchableHighlight>
    </Swipeout>
  );
};

MealItem.defaultProps = {
  lastEaten: ''
};

MealItem.propTypes = {
  deleteMeal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  lastEaten: PropTypes.string,
  name: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired
};

export default MealItem;
