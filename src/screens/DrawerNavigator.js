import React from 'react';
import { View, Text, Button } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen  from './HomeScreen';
import HomeScreenTabNavigator from './HomeScreenTabNavigator';

const InnerStackNavigator = new createStackNavigator({
  TabNavigator : {
    screen: HomeScreenTabNavigator
  }
})

const AppDrawerNavigator = new createDrawerNavigator({
  HomeScreen: { screen: InnerStackNavigator }
});

export default AppDrawerNavigator;

