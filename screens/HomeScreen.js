import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';
import { getOrderedFilteredMeals } from '../selectors/index';

import MealList from '../components/MealList';
import FilterTabs from '../components/FilterTabs';

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
  spacer: {
    flex: 1
  }
});

const HomeScreen = (props) => {
  const { deleteMeal, filter, meals, navigation, setFilter } = props;
  const { navigate } = navigation;
  const allMeals = meals.allIds.map(id => meals.byId[id]);

  return (
    <View style={styles.container}>
      <FilterTabs filter={filter} setFilter={setFilter} />
      {allMeals.length > 0 ? (
        <MealList
          deleteMeal={deleteMeal}
          allMeals={allMeals}
          navigate={navigate}
          style={styles.list}
        />
      ) : (
        <View style={styles.spacer} />
      )}
      <TouchableOpacity onPress={() => navigate('AddMeal')}>
        <Text style={styles.button}>Add meal</Text>
      </TouchableOpacity>
    </View>
  );
};

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'Meals',
    headerRight: (
      <Button
        color="black"
        onPress={() => navigation.navigate('Admin')}
        title="Admin"
      />
    )
  };
};

HomeScreen.propTypes = {
  deleteMeal: PropTypes.func.isRequired,
  filter: PropTypes.string,
  meals: PropTypes.shape({
    byId: PropTypes.object,
    allIds: PropTypes.array
  }),
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired
};

HomeScreen.defaultProps = {
  filter: '',
  meals: {
    byId: {},
    allIds: []
  }
};

const mapStateToProps = state => ({
  meals: getOrderedFilteredMeals(state),
  filter: state.filter
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
