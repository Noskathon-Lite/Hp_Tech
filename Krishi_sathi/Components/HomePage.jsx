import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Colors } from '../constants/Colors';
import agriImage from '../assets/images/agri.webp'; // Local agriculture image
import logo from '../assets/images/logo.png'; // Local logo image

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

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} /> {/* Logo */}
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProductForm')}>
          <Text style={styles.buttonText}>Add Product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

      {/* Agriculture Image */}
      <View style={styles.imageContainer}>
        <Image source={agriImage} style={styles.image} />
        <Text style={styles.motto}>
          "Empowering Agriculture, Cultivating Dreams."
        </Text>
        <Text style={styles.description}>
          Together, we grow a greener and sustainable future for everyone.
        </Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={Colors.light.tint} />
      ) : (
        <FlatList
          data={products}
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
    backgroundColor: '#e8f5e9', // Light green background for greenery
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 28,
    color: Colors.light.text,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  button: {
    backgroundColor: Colors.light.tint,
    padding: 10,
    borderRadius: 5,
    marginLeft: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  motto: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b5e20', // Dark green for emphasis
    textAlign: 'center',
  },
  description: {
    marginTop: 5,
    fontSize: 16,
    color: '#4caf50', // Light green for harmony
    textAlign: 'center',
  },
  productList: {
    paddingBottom: 20,
  },
});

export default HomePage;
