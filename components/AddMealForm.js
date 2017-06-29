import React from 'react';
import PropTypes from 'prop-types';
import {
  DatePickerIOS,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import shortid from 'shortid';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'mediumseagreen',
    color: 'white',
    fontSize: 16,
    height: 50,
    lineHeight: 50,
    marginHorizontal: 16,
    marginBottom: 12,
    textAlign: 'center'
  },
  group: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#CED0CE',
    borderStyle: 'solid',
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  input: {
    backgroundColor: '#eee',
    height: 50,
    paddingHorizontal: 12
  },
  label: {
    fontSize: 16,
    marginBottom: 8
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
            value={this.state.name}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Recipe source:</Text>
          <TextInput
            placeholder="e.g. River Cottage Veg Everyday"
            onChangeText={recipeSource => this.setState({ recipeSource })}
            style={styles.input}
            value={this.state.recipeSource}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Tags:</Text>
          <TextInput
            placeholder="e.g. bacon, pasta"
            onChangeText={tags => this.setState({ tags })}
            style={styles.input}
            value={this.state.tags}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Vegetarian:</Text>
          <Switch
            onValueChange={value => this.setState({ vegetarian: value })}
            value={this.state.vegetarian}
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
          <Text style={styles.button}>Add meal</Text>
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
