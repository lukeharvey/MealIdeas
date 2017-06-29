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
    paddingTop: 12
  },
  input: {
    height: 40
  },
  label: {
    fontSize: 16
  }
});

class EditMealForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      lastEaten: props.lastEaten,
      name: props.name,
      recipeSource: props.recipeSource,
      tags: props.tags
      // vegetarian: props.vegetarian
    };
  }

  handleSubmit() {
    const { lastEaten, name, recipeSource, tags, vegetarian } = this.state;
    const { id } = this.props;
    const meal = {
      id,
      lastEaten,
      name,
      recipeSource,
      tags,
      vegetarian
    };

    this.props.updateMeal(id, meal);
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
          <Text style={styles.button}>Save</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

EditMealForm.propTypes = {
  lastEaten: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  recipeSource: PropTypes.string,
  tags: PropTypes.string,
  goBack: PropTypes.func.isRequired,
  updateMeal: PropTypes.func.isRequired
};

EditMealForm.defaultProps = {
  lastEaten: '',
  recipeSource: '',
  tags: ''
  // vegetarian: false
};

export default EditMealForm;