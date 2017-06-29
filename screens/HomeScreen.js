import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';
import { mealsFilteredByKeyword } from '../selectors/index';

import MealList from '../components/MealList';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'mediumseagreen',
    color: 'white',
    fontSize: 16,
    height: 50,
    lineHeight: 50,
    marginBottom: 12,
    marginHorizontal: 16,
    textAlign: 'center'
  },
  container: {
    backgroundColor: 'white',
    flex: 1
  }
});

const HomeScreen = (props) => {
  const { deleteMeal, meals, navigation } = props;
  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <MealList
        deleteMeal={deleteMeal}
        meals={meals}
        navigate={navigate}
      />
      <TouchableHighlight onPress={() => navigate('AddMeal')}>
        <Text style={styles.button}>Add meal</Text>
      </TouchableHighlight>
    </View>
  );
};

HomeScreen.navigationOptions = {
  title: 'Meals'
};

HomeScreen.propTypes = {
  deleteMeal: PropTypes.func.isRequired,
  meals: PropTypes.shape({
    byId: PropTypes.object,
    allIds: PropTypes.array
  }),
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired
};

HomeScreen.defaultProps = {
  meals: {
    byId: {},
    allIds: []
  }
};

const mapStateToProps = state => ({
  meals: mealsFilteredByKeyword(state),
  keyword: state.keyword
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
