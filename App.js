import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/SignUpScreen';
import AppDrawerNavigator from './src/screens/DrawerNavigator';
import ViewResourceScreen from './src/screens/ViewResourceScreen';
import './src/helpers/connectMeteor';
import rootReducer from './src/reducers/combinedReducers';

export const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <AppStackNavigator />
  </Provider>
);

export default App;
const AppStackNavigator = new createStackNavigator(
  {
    WelcomeScreen: { screen: WelcomeScreen },
    LoginScreen: { screen: LoginScreen },
    RegisterScreen: { screen: RegisterScreen },
    DrawerNavigator: { screen: AppDrawerNavigator },
    ViewResourceScreen: { screen: ViewResourceScreen },
  },
  {
    navigationOptions: {
      gesturesEnabled: false,
      headerMode: 'screen',
    },
  },
);
