import React from 'react';
import { View, Text, Button } from 'react-native';

export default class WelcomeScreen extends React.Component {

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