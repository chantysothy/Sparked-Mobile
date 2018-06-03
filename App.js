import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Courses from './src/containers/Courses'
import Meteor from 'react-native-meteor';

Meteor.connect('ws://localhost:3000/websocket'); 


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Courses/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
