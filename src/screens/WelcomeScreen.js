/* eslint no-use-before-define: 'off', no-console: 'off' */
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Meteor from 'react-native-meteor';
import PropTypes from 'prop-types';

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Welcome',
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

WelcomeScreen.propTypes = {
  navigation: PropTypes.object,
};
