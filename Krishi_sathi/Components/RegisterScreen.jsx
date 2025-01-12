import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { db } from '../firebase'; // Adjust the path to your firebase.js
import { collection, addDoc } from 'firebase/firestore';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateAndRegister = async () => {
    if (!name) {
      Alert.alert('Error', 'Name is required.');
      return;
    }
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
    if (password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters long.');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      Alert.alert('Error', 'Password must contain at least one uppercase letter.');
      return;
    }
    if (!/[a-z]/.test(password)) {
      Alert.alert('Error', 'Password must contain at least one lowercase letter.');
      return;
    }
    if (!/\d/.test(password)) {
      Alert.alert('Error', 'Password must contain at least one number.');
      return;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      Alert.alert('Error', 'Password must contain at least one special character (!@#$%^&*).');
      return;
    }

    try {
      // Save user data to Firestore
      const docRef = await addDoc(collection(db, 'users'), {
        name, 
        email,
        password, // Avoid storing plaintext passwords in production! Use a hashing mechanism instead.
      });
      Alert.alert('Success', `Registered successfully! User ID: ${docRef.id}`);
      navigation.navigate('Login'); // Navigate to Login screen
    } catch (error) {
      Alert.alert('Error', `Failed to register: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
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
      <TouchableOpacity style={styles.button} onPress={validateAndRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Login')}
      >
        Already have an account? Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f9f0',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#2e7d32',
    fontWeight: 'bold',
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

export default RegisterScreen;
