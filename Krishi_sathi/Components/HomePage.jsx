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

const HomePage = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, John</Text>
          <Text style={styles.subGreeting}>It's a sunny day!</Text>
        </View>
        <TouchableOpacity style={styles.locationButton}>
          <Text style={styles.locationText}>Rajkot</Text>
        </TouchableOpacity>
      </View>

      {/* Weather Info
      <View style={styles.weatherCard}>
        <View style={styles.weatherItem}>
          <Text style={styles.weatherValue}>62° F</Text>
          <Text style={styles.weatherLabel}>Temperature</Text>
        </View>
        <View style={styles.weatherItem}>
          <Text style={styles.weatherValue}>61%</Text>
          <Text style={styles.weatherLabel}>Humidity</Text>
        </View>
        <View style={styles.weatherItem}>
          <Text style={styles.weatherValue}>0.0mm</Text>
          <Text style={styles.weatherLabel}>Rainfall</Text>
        </View>
        <View style={styles.weatherItem}>
          <Text style={styles.weatherValue}>3.9m/s</Text>
          <Text style={styles.weatherLabel}>WindSpeed</Text>
        </View>
      </View> */}

      {/* Image and Text Below Weather Info */}
      <View style={styles.imageTextSection}>
        <Image source={require('../assets/images/agri.webp')} style={styles.agriImage} />
        <Text style={styles.agriText}>
          Discover the best agricultural solutions for your needs!
        </Text>
      </View>

      {/* Diagnosis Button */}
      <TouchableOpacity style={styles.diagnosisButton}>
        <Text style={styles.diagnosisText}>Diagnosis issues with crop</Text>
      </TouchableOpacity>

      {/* Seed Section */}
      <Text style={styles.sectionTitle}>Seeds</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.gallery}>
        <Image style={styles.galleryImage} source={require('../assets/images/logo.png')} />
        <Image style={styles.galleryImage} source={require('../assets/images/logo.png')} />
        <Image style={styles.galleryImage} source={require('../assets/images/logo.png')} />
        <Image style={styles.galleryImage} source={require('../assets/images/logo.png')} />
      </ScrollView>

      {/* Buttons Below Seed Section */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Seeds</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Plants</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Soil Test</Text>
        </TouchableOpacity>
      </View>

      {/* Trending Diseases */}
      <Text style={styles.sectionTitle}>Trending Diseases</Text>
      <View style={styles.trendingCard}>
        <Image style={styles.trendingImage} source={require('../assets/images/logo.png')} />
        <View>
          <Text style={styles.trendingTitle}>African Mole Cricket</Text>
          <Text style={styles.trendingCategory}>🪲 Insect</Text>
        </View>
      </View>

      {/* Best Crop Section */}
      <Text style={styles.sectionTitle}>Best Crop to Plant</Text>
      <Text style={styles.bestCropText}>Corn, Wheat, and Barley are optimal for this season!</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: Colors.light.green,
    padding: 20,
    borderRadius: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subGreeting: {
    fontSize: 16,
    color: '#fff',
  },
  locationButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
  },
  locationText: {
    color: Colors.light.green,
    fontWeight: 'bold',
  },
  weatherCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
  },
  weatherItem: {
    alignItems: 'center',
  },
  weatherValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.green,
  },
  weatherLabel: {
    fontSize: 14,
    color: '#888',
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
  diagnosisButton: {
    backgroundColor: Colors.light.green,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  diagnosisText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.light.green,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  trendingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  trendingImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  trendingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  trendingCategory: {
    fontSize: 14,
    color: Colors.light.green,
  },
  bestCropText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
});

export default HomePage;
