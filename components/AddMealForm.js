import React from 'react';
import PropTypes from 'prop-types';
import {
  DatePickerIOS,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
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
      name: '',
      lastEaten: new Date().toISOString(),
      recipeAuthor: '',
      recipeBook: '',
      recipePage: '',
      recipeUrl: '',
      categoryBrunch: false,
      categoryLunch: false,
      categoryDinner: false,
      categoryVegetarian: false,
      tags: ''
    };
  }

  handleSubmit() {
    const id = shortid.generate();
    const {
      name,
      lastEaten,
      recipeAuthor,
      recipeBook,
      recipePage,
      recipeUrl,
      categoryBrunch,
      categoryLunch,
      categoryDinner,
      categoryVegetarian,
      tags
    } = this.state;
    const meal = {
      id,
      name,
      lastEaten,
      recipeAuthor,
      recipeBook,
      recipePage,
      recipeUrl,
      categoryBrunch,
      categoryLunch,
      categoryDinner,
      categoryVegetarian,
      tags
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
          <Text style={styles.label}>Recipe author:</Text>
          <TextInput
            placeholder="e.g. Jamie Oliver"
            onChangeText={recipeAuthor => this.setState({ recipeAuthor })}
            style={styles.input}
            value={this.state.recipeAuthor}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Recipe book:</Text>
          <TextInput
            placeholder="e.g. River Cottage Veg Everyday"
            onChangeText={recipeBook => this.setState({ recipeBook })}
            style={styles.input}
            value={this.state.recipeBook}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Recipe page:</Text>
          <TextInput
            placeholder="e.g. 10"
            onChangeText={recipePage => this.setState({ recipePage })}
            style={styles.input}
            value={this.state.recipePage}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Recipe URL:</Text>
          <TextInput
            placeholder="e.g. https://www.rivercottage.net/recipes/pinto-bean-chilli"
            onChangeText={recipeUrl => this.setState({ recipeUrl })}
            style={styles.input}
            value={this.state.recipeUrl}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Brunch:</Text>
          <Switch
            onValueChange={value => this.setState({ categoryBrunch: value })}
            value={this.state.categoryBrunch}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Lunch:</Text>
          <Switch
            onValueChange={value => this.setState({ categoryLunch: value })}
            value={this.state.categoryLunch}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Dinner:</Text>
          <Switch
            onValueChange={value => this.setState({ categoryDinner: value })}
            value={this.state.categoryDinner}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Vegetarian:</Text>
          <Switch
            onValueChange={value => this.setState({ categoryVegetarian: value })}
            value={this.state.categoryVegetarian}
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
        <TouchableOpacity
          onPress={this.handleSubmit}
        >
          <Text style={styles.button}>Add meal</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

AddMealForm.propTypes = {
  addMeal: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired
};

export default AddMealForm;
