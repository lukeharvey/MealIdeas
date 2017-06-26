import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import sampleData from '../sample-data';
import Meal from '../components/Meal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

class MealScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meals: sampleData,
      keyword: ''
    };
  }

  render() {
    const { meals } = this.state;
    const { params } = this.props.navigation.state;
    const { id } = params;
    const meal = meals.byId[id];

    return (
      <View style={styles.container}>
        <Meal {...meal} />
      </View>
    );
  }
}

MealScreen.navigationOptions = {
  title: 'Meal Screen'
};

MealScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired
};

export default MealScreen;
