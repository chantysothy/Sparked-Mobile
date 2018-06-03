import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Courses from './src/containers/Courses'
import Meteor from 'react-native-meteor';
import {createStackNavigator, StackNavigator } from 'react-navigation';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/SignUpScreen';
import AppDrawerNavigator from './src/screens/DrawerNavigator';

Meteor.connect('ws://localhost:3000/websocket'); 


export default class App extends React.Component {
  render() {
    return (
    <AppStackNavigator/>
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
    gesturesEnabled: false
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
