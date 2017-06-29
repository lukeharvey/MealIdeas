import { StackNavigator } from 'react-navigation';

import AddMealScreen from '../screens/AddMealScreen';
import EditMealScreen from '../screens/EditMealScreen';
import HomeScreen from '../screens/HomeScreen';
import MealScreen from '../screens/MealScreen';

const Router = StackNavigator({
  AddMeal: { screen: AddMealScreen },
  EditMeal: { screen: EditMealScreen },
  Home: { screen: HomeScreen },
  Meal: { screen: MealScreen }
}, {
  initialRouteName: 'Home'
});

export default Router;
