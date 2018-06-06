import React from 'react';
import { View, Text, Button } from 'react-native';
import Meteor from 'react-native-meteor';
import Units from '../../containers/Units';

export default class ScreenOne extends React.Component {

  render() {
    const user = Meteor.user();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>All Units</Text>
        <Units/>
      </View>
    );
  }
}