import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';
import { filteredMeals } from '../selectors/index';

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
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12
  },
  tabButton: {
    fontWeight: '600',
    paddingHorizontal: 16,
    textAlign: 'center'
  }
});

const HomeScreen = (props) => {
  const { deleteMeal, meals, navigation, setFilter } = props;
  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableHighlight style={styles.tab} onPress={() => setFilter('')}>
          <Text style={styles.tabButton}>All</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.tab} onPress={() => setFilter('vegetarian')}>
          <Text style={styles.tabButton}>Vegetarian</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.tab} onPress={() => setFilter('lunch')}>
          <Text style={styles.tabButton}>Lunch</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.tab} onPress={() => setFilter('dinner')}>
          <Text style={styles.tabButton}>Dinner</Text>
        </TouchableHighlight>
      </View>
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
  navigation: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired
};

HomeScreen.defaultProps = {
  meals: {
    byId: {},
    allIds: []
  }
};

const mapStateToProps = state => ({
  meals: filteredMeals(state)
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
