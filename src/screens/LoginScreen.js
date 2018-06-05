import React from 'react';
import { View, Text,TextInput, StyleSheet, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Icon, Input, FormInput } from 'react-native-elements';

export default class LoginScreen extends React.Component {
  state = {
    email: '',
    password: ''
  }

  showText = e => {
    const { email } = this.state;
    console.log(email, type)
  }

  render() {
    return (
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <Input
            placeholder='Email'
            leftIcon={<Icon name='email'/>}
            onChangeText={
              (email => this.setState({email}))
            }
          />
           <Input
            placeholder='Password'
            leftIcon={<Icon name='lock'/>}
            onChangeText={
              (password => this.setState({password}))
            }
            secureTextEntry={true}
        />
        <View>
          <Button
            icon={{
              name: 'person',
              size: 15,
              color: 'white'
            }}
            title='Login'
            onPress={e => this.showText(e)}
          />
        </View>
      </View>
    );
  }
}