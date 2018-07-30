import { createStackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import RegisterScreen from './SignUpScreen';
import ViewResourceScreen from './ViewResourceScreen';
import ImagesScreen from './ImagesScreen';
import VideoScreen from './VideoScreen';
import ScreenTwo from './ScreenTwo';
import ScreenOne from './ScreenOne';
import WelcomeScreen from './WelcomeScreen';

const AppStackNavigator = new createStackNavigator(
  {
    WelcomeScreen: {
      screen: WelcomeScreen,
    },
    LoginScreen: {
      screen: LoginScreen,
    },
    RegisterScreen: {
      screen: RegisterScreen,
    },
    ViewResourceScreen: {
      screen: ViewResourceScreen,
    },
    ImagesScreen: {
      screen: ImagesScreen,
    },
    VideoScreen: {
      screen: VideoScreen,
    },
    ScreenTwo: {
      screen: ScreenTwo,
      navigationOptions: {
        tabBarLabel: 'Resources',
      },
    },
    ScreenOne: {
      screen: ScreenOne,
      navigationOptions: {
        tabBarLabel: 'Units',
      },
    },
  },
  {
    navigationOptions: {
      gesturesEnabled: false,
      headerMode: 'screen',
    },
  },
);

export default AppStackNavigator;
