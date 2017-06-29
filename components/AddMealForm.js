import React from 'react';
import PropTypes from 'prop-types';
import {
  DatePickerIOS,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import shortid from 'shortid';
import moment from 'moment';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'mediumseagreen',
    color: 'white',
    fontSize: 16,
    height: 50,
    lineHeight: 50,
    marginTop: 10,
    textAlign: 'center'
  },
  group: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#CED0CE',
    borderStyle: 'solid',
    paddingHorizontal: 12,
    paddingTop: 12
  },
  input: {
    height: 40
  },
  label: {
    fontSize: 16
  }
});

class AddMealForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      lastEaten: new Date().toISOString(),
      name: '',
      recipeSource: '',
      tags: '',
      vegetarian: false
    };
  }

  handleSubmit() {
    const { lastEaten, name, recipeSource, tags, vegetarian } = this.state;
    const id = shortid.generate();
    const meal = {
      id,
      lastEaten,
      name,
      recipeSource,
      tags,
      vegetarian
    };

    this.props.addMeal(meal);
    this.props.goBack();
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.group}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            placeholder="e.g. Spaghetti Bolognese"
            onChangeText={name => this.setState({ name })}
            style={styles.input}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Recipe source:</Text>
          <TextInput
            placeholder="e.g. River Cottage Veg Everyday"
            onChangeText={recipeSource => this.setState({ recipeSource })}
            style={styles.input}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Tags:</Text>
          <TextInput
            placeholder="e.g. bacon, pasta"
            onChangeText={tags => this.setState({ tags })}
            style={styles.input}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Date last eaten:</Text>
          <DatePickerIOS
            date={new Date(this.state.lastEaten)}
            maximumDate={new Date()}
            mode="date"
            onDateChange={date => this.setState({ lastEaten: date.toISOString() })}
          />
        </View>
        <TouchableHighlight
          onPress={this.handleSubmit}
        >
          <Text style={styles.button}>Submit</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

AddMealForm.propTypes = {
  addMeal: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired
};

export default AddMealForm;
