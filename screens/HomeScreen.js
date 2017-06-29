import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';
import { mealsFilteredByKeyword } from '../selectors/index';

import MealList from '../components/MealList';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { meals } = this.props;
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Button
          onPress={() => false}
          title="Add Meal"
        />
        <MealList meals={meals} navigate={navigate} />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Meals'
};

HomeScreen.propTypes = {
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
