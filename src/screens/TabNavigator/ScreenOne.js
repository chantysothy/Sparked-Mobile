// @flow
import React from 'react';
import { View, Text } from 'react-native';
import Units from '../../containers/Units';

const ScreenOne = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>All Units</Text>
    <Units />
  </View>
);

export default ScreenOne;
