// @flow
/* eslint no-use-before-define: 'off', no-console: 'off' */

import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Meteor from 'react-native-meteor';

const Props = {
  navigation: Object,
};

export default class WelcomeScreen extends React.Component<Props> {
  static navigationOptions = {
    header: null,
    title: 'Welcome',
  }
  state = {
    link: '',
  }

  _handleSubmit = () => {
    const value = this._form.getValue();
    console.log(value);
    return this.props.navigation.navigate('LoginScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ justifyContent: 'center' }}> SparkEd Mobile</Text>
        {!Meteor.userId() ? (
          <Button title="Connect" onPress={() => this.props.navigation.navigate('LoginScreen')} />
        ) : (
          <Button title="Connect" onPress={() => this.props.navigation.navigate('ScreenOne')} />
        )}

        <Text>{this.state.link}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },
});
