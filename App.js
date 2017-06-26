import { StackNavigator } from 'react-navigation';

import HomeScreen from './containers/HomeScreen';
import MealScreen from './containers/MealScreen';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Meal: { screen: MealScreen }
});

export default App;
