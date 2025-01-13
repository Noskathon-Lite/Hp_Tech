import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet } from "react-native";

import { db } from '../firebase';

const PlantVisualizer = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const plantsRef = db.ref("plants"); // Change "products" to "plants" if plants have a dedicated database path
    const handleData = (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const plantArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setPlants(plantArray);
      } else {
        setPlants([]);
      }
      setLoading(false);
    };

    plantsRef.on("value", handleData);

    return () => plantsRef.off("value", handleData); // Cleanup listener
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#388E3C" />
        <Text style={styles.loaderText}>Loading plants...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌱 Plant Collection</Text>
      {plants.length === 0 ? (
        <Text style={styles.noDataText}>No plants available</Text>
      ) : (
        <FlatList
          data={plants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.plantItem}>
              <Image
                source={{ uri: item.image }}
                style={styles.plantImage}
                resizeMode="contain"
              />
              <View style={styles.plantDetails}>
                <Text style={styles.plantTitle}>{item.plantName}</Text>
                <Text style={styles.plantText}>🌿 Type: {item.type}</Text>
                <Text style={styles.plantText}>🌿 Price: ₹{item.price}</Text>
                <Text style={styles.plantText}>🌿 Description: {item.description}</Text>
                <Text style={styles.plantText}>🌿 Added on: {item.addedDate}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E8F5E9", // Light greenish background for plants
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2E7D32", // Dark green title
    marginBottom: 20,
    textAlign: "center",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8F5E9",
  },
  loaderText: {
    marginTop: 10,
    fontSize: 16,
    color: "#4CAF50",
  },
  noDataText: {
    fontSize: 16,
    color: "#6A6A6A",
    textAlign: "center",
    marginTop: 20,
  },
  plantItem: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#FFFFFF", // White card background
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#A5D6A7", // Light green border
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  plantImage: {
    width: 80,
    height: 80,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: "#C8E6C9", // Light green background for images
  },
  plantDetails: {
    flex: 1,
    justifyContent: "center",
  },
  plantTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32", // Dark green for plant names
    marginBottom: 5,
  },
  plantText: {
    fontSize: 14,
    color: "#4E342E", // Earthy brown for plant details
    marginBottom: 3,
  },
});

export default PlantVisualizer;
