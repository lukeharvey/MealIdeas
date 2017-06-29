import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';

import Meal from '../components/Meal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

const MealScreen = (props) => {
  const { eatMeal, meals, navigation } = props;
  const { params } = navigation.state;
  const { id } = params;
  const meal = meals.byId[id];

  return (
    <View style={styles.container}>
      <Meal {...meal} eatMeal={eatMeal} />
    </View>
  );
};

MealScreen.navigationOptions = ({ navigation }) => {
  const { id, name } = navigation.state.params;
  return {
    title: `${name}`,
    headerRight: (
      <Button
        color="dodgerblue"
        onPress={() => navigation.navigate('EditMeal', { id })}
        title="Edit"
      />
    )
  };
};

MealScreen.propTypes = {
  eatMeal: React.PropTypes.func.isRequired,
  meals: PropTypes.shape({
    byId: PropTypes.object,
    allIds: PropTypes.array
  }),
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired
};

MealScreen.defaultProps = {
  meals: {
    byId: {},
    allIds: []
  }
};

const mapStateToProps = state => ({
  meals: state.meals
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MealScreen);
