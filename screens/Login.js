import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import logo from '../assets/logo.jpeg';

const Login = () => {

  const handleSignInPressed = () => {
    Alert.alert('Hello');
  };

  return (
    <View style={styles.main}>
      <Image
        source={logo}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        label="Email"
        mode="outlined"
        left={<TextInput.Icon name="email" />}
      />

      <TextInput
        style={styles.input}
        label="Password"
        mode="outlined"
        left={<TextInput.Icon name="lock" />}
        secureTextEntry
      />

      <Button
        style={styles.button}
        mode='contained'
        onPress={handleSignInPressed}
      >Sign In</Button>

      <Text style={styles.text}>Do not have account? Sign Up.</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    padding: 10,
    flex: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 5,
    marginBottom: 30,
    alignSelf: 'center',
  },
  input: {
    marginVertical: 5,
  },
  button: {
    marginVertical: 5,
    height: 50,
  },
  text: {
    marginTop: 20,
    textAlign: 'center',
    color: '#e49314'
  }
});
