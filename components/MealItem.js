import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

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
  const { id, lastEaten, name, navigate } = props;
  const formattedDate = lastEaten ? moment(lastEaten).startOf('day').fromNow() : 'Never';

  function onPress() {
    return navigate('Meal', { id, name });
  }

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.item}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.copy}>Last eaten: {formattedDate}</Text>
      </View>
    </TouchableHighlight>
  );
};

MealItem.defaultProps = {
  lastEaten: ''
};

MealItem.propTypes = {
  id: PropTypes.string.isRequired,
  lastEaten: PropTypes.string,
  name: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired
};

export default MealItem;
