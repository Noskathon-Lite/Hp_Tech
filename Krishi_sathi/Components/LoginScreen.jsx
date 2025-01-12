import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateAndLogin = () => {
    if (!email) {
      Alert.alert('Error', 'Email is required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Error', 'Enter a valid email.');
      return;
    }
    if (!password) {
      Alert.alert('Error', 'Password is required.');
      return;
    }
    Alert.alert('Success', 'Logged in successfully!');
    navigation.navigate('HomePage')
  };

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
      <TouchableOpacity style={styles.button} onPress={validateAndLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Register')}
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
    backgroundColor: '#f0f9f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  input: {
    borderWidth: 1,
    borderColor: '#81c784',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    marginTop: 15,
    textAlign: 'center',
    color: '#388e3c',
    fontWeight: '500',
  },
});

export default LoginScreen;
