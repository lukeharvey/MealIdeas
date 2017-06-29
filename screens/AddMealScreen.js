import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';
import AddMealForm from '../components/AddMealForm';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  }
});

const AddMealScreen = (props) => {
  const { addMeal, navigation } = props;
  const { goBack } = navigation;

  return (
    <ScrollView style={styles.container}>
      <AddMealForm addMeal={addMeal} goBack={goBack} />
    </ScrollView>
  );
};

AddMealScreen.navigationOptions = {
  title: 'Add Meal'
};

AddMealScreen.propTypes = {
  addMeal: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  meals: state.meals
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddMealScreen);
