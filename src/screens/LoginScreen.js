import React from 'react';
import { View, Text } from 'react-native';
import { withTracker, MeteorListView } from 'react-native-meteor';

export default class LoginScreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Login Screen</Text>
      </View>
    );
  }
}