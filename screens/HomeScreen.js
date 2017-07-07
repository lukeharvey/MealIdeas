import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';
import { getOrderedFilteredMeals } from '../selectors/index';

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
    marginHorizontal: 12,
    marginVertical: 8,
    flexGrow: 0
  },
  tab: {
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    marginHorizontal: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    overflow: 'hidden'
  },
  tabSelected: {
    backgroundColor: 'lightblue',
    borderRadius: 40,
    marginHorizontal: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    overflow: 'hidden'
  },
  tabText: {
    fontWeight: '600',
    textAlign: 'center'
  }
});

const HomeScreen = (props) => {
  const { deleteMeal, filter, meals, navigation, setFilter } = props;
  const { navigate } = navigation;
  const allMeals = meals.allIds.map(id => meals.byId[id]);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabs}
      >
        <TouchableHighlight
          style={filter === '' ? styles.tabSelected : styles.tab}
          onPress={() => setFilter('')}
        >
          <Text style={styles.tabText}>All</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={filter === 'vegetarian' ? styles.tabSelected : styles.tab}
          onPress={() => setFilter('vegetarian')}
        >
          <Text style={styles.tabText}>Vegetarian</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={filter === 'brunch' ? styles.tabSelected : styles.tab}
          onPress={() => setFilter('brunch')}
        >
          <Text style={styles.tabText}>Brunch</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={filter === 'lunch' ? styles.tabSelected : styles.tab}
          onPress={() => setFilter('lunch')}
        >
          <Text style={styles.tabText}>Lunch</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={filter === 'dinner' ? styles.tabSelected : styles.tab}
          onPress={() => setFilter('dinner')}
        >
          <Text style={styles.tabText}>Dinner</Text>
        </TouchableHighlight>
      </ScrollView>
      <MealList
        deleteMeal={deleteMeal}
        allMeals={allMeals}
        navigate={navigate}
        style={styles.list}
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
