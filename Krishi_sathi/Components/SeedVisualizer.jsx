import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../firebase"; // Ensure this imports your Firebase app initialization

const SeedVisualizer = () => {
  const [seeds, setSeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase(app); // Get the database instance
    const seedsRef = ref(db, "products"); // Reference to the "products" node

    const handleData = (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const seedArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setSeeds(seedArray);
      } else {
        setSeeds([]);
      }
      setLoading(false);
    };

    const unsubscribe = onValue(seedsRef, handleData);

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#6200EE" />
        <Text>Loading seeds...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seed List</Text>
      {seeds.length === 0 ? (
        <Text style={styles.noDataText}>No seeds available</Text>
      ) : (
        <FlatList
          data={seeds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.seedItem}>
              <Image
                source={{ uri: item.image }}
                style={styles.seedImage}
                resizeMode="contain"
              />
              <View style={styles.seedDetails}>
                <Text style={styles.seedTitle}>{item.productName}</Text>
                <Text style={styles.seedText}>Price: ₹{item.price}</Text>
                <Text style={styles.seedText}>Quantity: {item.quantity}</Text>
                <Text style={styles.seedText}>
                  Description: {item.description}
                </Text>
                <Text style={styles.seedText}>Added on: {item.createdAt}</Text>
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
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
    marginTop: 20,
  },
  seedItem: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  seedImage: {
    width: 80,
    height: 80,
    marginRight: 15,
    borderRadius: 8,
    backgroundColor: "#EAEAEA",
  },
  seedDetails: {
    flex: 1,
    justifyContent: "center",
  },
  seedTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  seedText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 3,
  },
});

export default SeedVisualizer;
