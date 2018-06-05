import React from 'react';
import { View, Text, Button } from 'react-native';
import Meteor from 'react-native-meteor';

export default class ScreenOne extends React.Component {

  render() {
    const user = Meteor.user();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Logged in as: { user.profile.name } </Text>
        <Text>{ user.emails[0].address } </Text>
      </View>
    );
  }
}