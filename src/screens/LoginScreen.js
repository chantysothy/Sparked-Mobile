import React from 'react';
import { View, Text, Button } from 'react-native';
import { Input } from 'react-native-elements';
import Meteor from 'react-native-meteor';
import PropTypes from 'prop-types';

export default class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
    error: '',
  }

  handleLogin = () => {
    const { email, password } = this.state;
    if (!email.length) {
      this.setState({ error: "Email can't be empty" });
      return;
    } else if (!password.length) {
      this.setState({ error: "Password can't be empty" });
      return;
    }
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      }
      return this.props.navigation.navigate('ScreenOne');
    });
  }

  render() {
    const { error } = this.state;

    return (
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Input
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          returnKeyType={'next'}
        />
        <Input
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          secureTextEntry={true}
          returnKeyType={'done'}
        />
        <View>
          <Button
            icon={{
              name: 'person',
              size: 15,
              color: 'white',
            }}
            title="Login"
            onPress={() => this.props.navigation.navigate('ScreenOne')}
          />
        </View>
        <Text>{error}</Text>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object,
};
