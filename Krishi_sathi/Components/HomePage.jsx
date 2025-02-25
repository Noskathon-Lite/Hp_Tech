import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../constants/Colors';

const HomePage = ({ navigation, isLoggedIn, userName }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* Logo */}
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        {/* Header Title */}
        <Text style={styles.headerTitle}>Home</Text>
        {/* Register/Login or Profile Section */}
        {isLoggedIn ? (
          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.userNameText}>{userName}</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.authButtons}>
            <TouchableOpacity
              style={styles.authButton}
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={styles.authButtonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.authButton}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.authButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Namaskar in Nepali */}
      <Text style={styles.namaskarText}>नमस्कार, सन्चै हुनुहुन्छ?</Text>

      {/* Image and Text Below Weather Info */}
      <View style={styles.imageTextSection}>
        <Image
          source={require('../assets/images/agri.webp')}
          style={styles.agriImage}
        />
        <Text style={styles.agriText}>
          Discover the best agricultural solutions for your needs!
        </Text>
      </View>

      {/* Seeds Section */}
      <View style={styles.sectionWithButton}>
        <Text style={styles.sectionTitle}>Seeds</Text>
        <TouchableOpacity
          style={styles.visualizeButton}
          onPress={() => navigation.navigate('SeedVisualizer')}
        >
          <Text style={styles.visualizeButtonText}>Visualize</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.gallery}
      >
        <Image
          style={styles.galleryImage}
          source={require('../assets/images/Onion-1.jpg')}
        />
        <Image
          style={styles.galleryImage}
          source={require('../assets/images/Onion-1.jpg')}
        />
        <Image
          style={styles.galleryImage}
          source={require('../assets/images/Onion-1.jpg')}
        />
        <Image
          style={styles.galleryImage}
          source={require('../assets/images/Onion-1.jpg')}
        />
      </ScrollView>

      {/* Plants Section */}
      <View style={styles.sectionWithButton}>
        <Text style={styles.sectionTitle}>Plants</Text>
        <TouchableOpacity
          style={styles.visualizeButton}
          onPress={() => navigation.navigate('PlantVisualizer')}
        >
          <Text style={styles.visualizeButtonText}>Visualize</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.gallery}
      >
        <Image
          style={styles.galleryImage}
          source={require('../assets/images/a.jpg')}
        />
        <Image
          style={styles.galleryImage}
          source={require('../assets/images/a.jpg')}
        />
        <Image
          style={styles.galleryImage}
          source={require('../assets/images/a.jpg')}
        />
        <Image
          style={styles.galleryImage}
          source={require('../assets/images/a.jpg')}
        />
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DetectSoil')}
      >
        <Text style={styles.authButtonText}>Detect Soil</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.green,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: Colors.light.green,
    padding: 0,
    borderRadius: 10,
  },
  logo: {
    width: 75,
    height: 80,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  authButtons: {
    flexDirection: 'row',
  },
  authButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  authButtonText: {
    color: Colors.light.green,
    fontWeight: 'bold',
  },
  profileButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
  },
  userNameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light.green,
  },
  namaskarText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.light.green,
    marginBottom: 15,
  },
  imageTextSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  agriImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  agriText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.light.text,
  },
  sectionWithButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  visualizeButton: {
    backgroundColor: Colors.light.green,
    padding: 10,
    borderRadius: 5,
  },
  visualizeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  gallery: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  galleryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: Colors.light.green,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default HomePage;
