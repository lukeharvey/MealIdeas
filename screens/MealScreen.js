import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
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
  const { meals, navigation } = props;
  const { params } = navigation.state;
  const { id } = params;
  const meal = meals.byId[id];

  return (
    <View style={styles.container}>
      <Meal {...meal} />
    </View>
  );
};

MealScreen.navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params.name}`
});

MealScreen.propTypes = {
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
