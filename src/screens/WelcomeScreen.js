import React from 'react';
import { View, Text, Button, TouchableHighlight, StyleSheet } from 'react-native';
import { Icon, Input } from 'react-native-elements';

export default class WelcomeScreen extends React.Component {

    static navigationOptions = {
        header: null,
        title: 'Welcome'
    }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> SparkEd Mobile</Text>

            <Input
              placeholder='Server Address'
              leftIcon={<Icon name='link'/>}
              onChangeText={
                (link => this.setState({link}))
              }
              returnKeyType={'next'}
              style={{margin: 40}}
          />
          <View/>
            <Button
                title='Connect' onPress={ () => this.props.navigation.navigate('LoginScreen') }
            />
        
         

         {/* <Button
            title='Register' onPress={ () => this.props.navigation.navigate('RegisterScreen') }
        /> */}
      </View>
    );
  }
}