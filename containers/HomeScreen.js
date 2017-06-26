import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, View } from 'react-native';

import sampleData from '../sample-data';
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

    this.state = {
      meals: sampleData,
      keyword: ''
    };
  }

  render() {
    const { meals } = this.state;
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <MealList meals={meals} navigate={navigate} />
        <Button
          onPress={() => false}
          title="Add Meal"
        />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Meals'
};

HomeScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired
};

export default HomeScreen;
