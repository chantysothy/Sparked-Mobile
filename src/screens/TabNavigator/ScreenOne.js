import React from 'react';
import { View, Text, Button } from 'react-native';
import Meteor from 'react-native-meteor';
import Courses from '../../containers/Courses';

export default class ScreenOne extends React.Component {

  render() {
    const user = Meteor.user();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>All Courses</Text>
        {/* <Courses navigation={() => this.props.navigation.navigate('WelcomeScreen')}/> */}
        <Courses/>
      </View>
    );
  }
}