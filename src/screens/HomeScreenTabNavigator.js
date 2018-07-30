/* eslint no-undef: 'off' */
import { createBottomTabNavigator } from 'react-navigation';
import ScreenOne from './TabNavigator/ScreenOne';

export default (HomeScreenTabNavigator = new createBottomTabNavigator({
  ScreenOne: {
    screen: ScreenOne,
    navigationOptions: {
      tabBarLabel: 'Units',
    },
  },
}));
