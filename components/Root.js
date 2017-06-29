import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import MealScreen from '../screens/MealScreen';

const Root = StackNavigator({
  Home: { screen: HomeScreen },
  Meal: { screen: MealScreen }
});

export default Root;
