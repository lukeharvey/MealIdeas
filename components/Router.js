import { StackNavigator } from 'react-navigation';

import AddMealScreen from '../screens/AddMealScreen';
import EditMealScreen from '../screens/EditMealScreen';
import HomeScreen from '../screens/HomeScreen';
import MealScreen from '../screens/MealScreen';
import AdminScreen from '../screens/AdminScreen';

const Router = StackNavigator({
  AddMeal: { screen: AddMealScreen },
  EditMeal: { screen: EditMealScreen },
  Home: { screen: HomeScreen },
  Meal: { screen: MealScreen },
  Admin: { screen: AdminScreen }
}, {
  initialRouteName: 'Home'
});

export default Router;
