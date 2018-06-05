import React from 'react';
import { View, Text, Button, TouchableHighlight, StyleSheet } from 'react-native';

export default class WelcomeScreen extends React.Component {

    static navigationOptions = {
        header: null,
        title: 'Welcome'
    }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Welcome Screen</Text>
        <Button
            title='Log in' onPress={ () => this.props.navigation.navigate('LoginScreen') }
        />

         <Button
            title='Register' onPress={ () => this.props.navigation.navigate('RegisterScreen') }
        />
      </View>
    );
  }
}