import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase'; // Import Firestore instance

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const validateAndSubmit = async () => {
    if (!productName) {
      Alert.alert('Error', 'Product name is required.');
      return;
    }
    if (!quantity || isNaN(quantity) || Number(quantity) <= 0) {
      Alert.alert('Error', 'Enter a valid quantity.');
      return;
    }
    if (!price || isNaN(price) || Number(price) <= 0) {
      Alert.alert('Error', 'Enter a valid price.');
      return;
    }
    if (!image) {
      Alert.alert('Error', 'Image URL is required.');
      return;
    }
    if (!description) {
      Alert.alert('Error', 'Description is required.');
      return;
    }

    try {
      await addDoc(collection(db, 'products'), {
        productName,
        quantity: Number(quantity),
        price: Number(price),
        image,
        description,
        createdAt: serverTimestamp(),
      });
      Alert.alert('Success', 'Product submitted successfully!');
      setProductName('');
      setQuantity('');
      setPrice('');
      setImage('');
      setDescription('');
    } catch (error) {
      Alert.alert('Error', 'Failed to submit product. Please try again.');
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add Product</Text>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={validateAndSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  textArea: {
    height: 100,
    textAlignVertical: 'top',
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
});

export default ProductForm;
