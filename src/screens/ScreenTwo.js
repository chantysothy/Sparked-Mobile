import React from 'react';
import { View, Text } from 'react-native';
// import { store } from '../../../App';
import Resources from '../containers/Resources';
// import PDFExample from '../../components/Resources';
// const { unitName } = store.getState(); PDFExample

const ScreenTwo = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text> Screen 2</Text>
    <Text>{'UNitName'}</Text>
    <View>
      <Resources />
    </View>
  </View>
);

export default ScreenTwo;
