import React from 'react';
import { View, Text } from 'react-native';

export default class WelcomeScreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Welcome Screen</Text>

      </View>
    );
  }
}