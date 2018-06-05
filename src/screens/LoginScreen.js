import React from 'react';
import { View, Text,TextInput, StyleSheet, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Icon, Input, FormInput } from 'react-native-elements';
import Meteor from 'react-native-meteor';

export default class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
    error: ''
  }

  handleLogin = e => {
    const { email, password } = this.state;
    Meteor.loginWithPassword(email, password, (err, res) => {
      err ? this.setState({error:err.reason}) : this.props.navigation.navigate('HomeScreen')
    })
  }

  render() {
    const { error } = this.state;
    return (
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <Input
            placeholder='Email'
            leftIcon={<Icon name='email'/>}
            onChangeText={
              (email => this.setState({email}))
            }
            returnKeyType={'next'}
          />
           <Input
            placeholder='Password'
            leftIcon={<Icon name='lock'/>}
            onChangeText={
              (password => this.setState({password}))
            }
            secureTextEntry={true}
            returnKeyType={'done'}
        />
        <View>
          <Button
            icon={{
              name: 'person',
              size: 15,
              color: 'white'
            }}
            title='Login'
            onPress={e => this.handleLogin(e)}
          />
        </View>
        <Text>{error}</Text>
      </View>
    );
  }
}