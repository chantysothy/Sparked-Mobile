import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import Meteor from 'react-native-meteor';

const Props = {
  navigation: Object,
};

export default class LoginScreen extends React.Component<Props> {
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
      err ? this.setState({ error: err.reason }) : this.props.navigation.navigate('HomeScreen');
    });
  }

  render() {
    const { error } = this.state;

    return (
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Input
          placeholder="Email"
          leftIcon={<Icon name="email" />}
          onChangeText={email => this.setState({ email })}
          returnKeyType={'next'}
        />
        <Input
          placeholder="Password"
          leftIcon={<Icon name="lock" />}
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
            onPress={e => this.handleLogin(e)}
          />
        </View>
        <Text>{error}</Text>
      </View>
    );
  }
}
