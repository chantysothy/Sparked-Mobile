import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import ScreenOne from './TabNavigator/ScreenOne'
import ScreenTwo from './TabNavigator/ScreenTwo'

export default (HomeScreenTabNavigator = new createBottomTabNavigator({
  ScreenOne: {
    screen: ScreenOne,
    navigationOptions: {
      tabBarLabel: 'Units'
    }
  },
  ScreenTwo: {
    screen: ScreenTwo,
    navigationOptions: {
      tabBarLabel: 'Resources'
    }
  }
}))
