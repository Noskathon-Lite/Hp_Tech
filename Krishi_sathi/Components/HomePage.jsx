import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Colors } from '../Colors';  // Import Colors.ts for styling

const HomePage = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsList);
      } catch (error) {
        Alert.alert('Error', 'Failed to load products.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.productName}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProductForm')}>
          <Text style={styles.buttonText}>Add Product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={Colors.light.tint} />
      ) : (
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.productList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    color: Colors.light.text,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: Colors.light.tint,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  productList: {
    paddingBottom: 20,
  },
  productCard: {
    flexDirection: 'row',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  productDetails: {
    padding: 10,
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  productDescription: {
    fontSize: 14,
    color: Colors.light.icon,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginTop: 5,
  },
});

export default HomePage;
