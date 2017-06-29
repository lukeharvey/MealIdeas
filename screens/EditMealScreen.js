import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';
import EditMealForm from '../components/EditMealForm';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  }
});

const EditMealScreen = (props) => {
  const { meals, navigation, updateMeal } = props;
  const { goBack } = navigation;
  const { params } = navigation.state;
  const { id } = params;
  const meal = meals.byId[id];

  return (
    <ScrollView style={styles.container}>
      <EditMealForm {...meal} goBack={goBack} updateMeal={updateMeal} />
    </ScrollView>
  );
};

EditMealScreen.navigationOptions = {
  title: 'Edit Meal'
};

EditMealScreen.propTypes = {
  meals: PropTypes.shape({
    byId: PropTypes.object,
    allIds: PropTypes.array
  }),
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
  updateMeal: PropTypes.func.isRequired
};

EditMealScreen.defaultProps = {
  meals: {
    byId: {},
    allIds: []
  }
};

const mapStateToProps = state => ({
  meals: state.meals
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditMealScreen);
