import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Swipeout from 'react-native-swipeout';

const styles = StyleSheet.create({
  copy: {
    color: 'dodgerblue',
    fontSize: 14,
    paddingTop: 2
  },
  item: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#CED0CE',
    borderStyle: 'solid',
    padding: 12
  },
  name: {
    fontSize: 16
  }
});

const MealItem = (props) => {
  const { deleteMeal, id, lastEaten, name, navigate } = props;
  const formattedDate = lastEaten ? moment(lastEaten).startOf('day').fromNow() : 'Never';

  const swipeoutBtns = [
    {
      backgroundColor: 'dodgerblue',
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
          <Text style={styles.copy}>Last eaten: {formattedDate}</Text>
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
