import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ComponentScreens from './src/screens/ComponentScreens';
import CounterScreen from './src/screens/CounterScreen';
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from './src/screens/ImageScreen';
import ListScreen from './src/screens/ListScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreens,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
