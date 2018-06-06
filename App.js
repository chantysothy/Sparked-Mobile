import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Meteor from 'react-native-meteor';
import {createStackNavigator, StackNavigator } from 'react-navigation';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/SignUpScreen';
import AppDrawerNavigator from './src/screens/DrawerNavigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import unitReducer from './src/reducers/unitReducer';


export const store = createStore(unitReducer);

Meteor.connect('ws://10.1.0.142:3000/websocket'); 

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <AppStackNavigator/>
      </Provider>
    
    );
  }
}

const AppStackNavigator = new createStackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  LoginScreen: { screen: LoginScreen },
  RegisterScreen: { screen: RegisterScreen },
  DrawerNavigator: { screen: AppDrawerNavigator }
}, {
  navigationOptions: {
    gesturesEnabled: false,
    headerMode: 'screen'
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
