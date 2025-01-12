import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogin = async () => {
  //   try {
  //     // Replace this URL with your actual API endpoint
  //     const response = await axios.post('https://your-api-url.com/login', {
  //       email,
  //       password,
  //     });

  //     if (response.data.success) {
  //       Alert.alert('Success', 'Logged in successfully!');
  //       navigation.navigate('Home'); // Navigate to the "Home" screen
  //     } else {
  //       Alert.alert('Error', response.data.message || 'Invalid login credentials.');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     Alert.alert('Error', 'Something went wrong. Please try again.');
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login"  />
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Register')} // Navigate to "Register" screen
      >
        Don’t have an account? Register
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  link: {
    marginTop: 15,
    textAlign: 'center',
    color: 'blue',
    fontWeight: '500',
  },
});

export default LoginScreen;