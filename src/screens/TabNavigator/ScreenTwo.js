import React from 'react';
import { View, Text, Button } from 'react-native';
import { store } from '../../../App';

export default class ScreenTwo extends React.Component {

  render() {
    const { unitName } = store.getState();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>  Screen 2</Text>
        <Text>
          {unitName}
        </Text>
      </View>
    );
  }
}