import { createStackNavigator } from 'react-navigation';
import HomeScreenTabNavigator from './HomeScreenTabNavigator';

const InnerStackNavigator = new createStackNavigator({
  TabNavigator: {
    screen: HomeScreenTabNavigator,
  },
});
export default InnerStackNavigator;
