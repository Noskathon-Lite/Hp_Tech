import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet, Image, ScrollView } from 'react-native';

const DetectSoil = () => {
  const [moisture, setMoisture] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const fetchMoistureData = async () => {
    setLoading(true);
    setError(null);

    try {
      // Mock data (Replace this with real Firebase data fetching)
      const mockMoistureData = {
        moisture: 25, // Example value for testing
      };

      setMoisture(mockMoistureData.moisture);
      suggestSeeds(mockMoistureData.moisture);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('माटोको आर्द्रता पत्ता लगाउन समस्या आयो। कृपया पछि प्रयास गर्नुहोस्।');
    } finally {
      setLoading(false);
    }
  };

  const suggestSeeds = (moistureLevel) => {
    const seedSuggestions = [];

    if (moistureLevel <= 300) {
        seedSuggestions.push(
          { name: 'धान (Rice)', description: 'धानलाई प्राय: उच्च आर्द्रतामा राम्रोसँग हुर्कन सकिन्छ। यसलाई धानखेतीका लागि आदर्श मानिन्छ।', image: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Rice.jpg', moistureRange: '40-80%' },
          { name: 'कमल (Lotus)', description: 'कमल फूलहरू प्राय: पानीमा मात्र हुर्कन्छ। यसका लागि उच्च आर्द्रता आवश्यक छ।', image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Nelumbo_nucifera_open_flower_-_botanic_garden_adelaide2.jpg', moistureRange: '50-70%' },
          { name: 'ऊखु (Sugarcane)', description: 'ऊखुलाई उष्णकटिबंधीय अवस्थाहरू आवश्यक पर्छ। यसलाई पर्याप्त आर्द्रता चाहिन्छ।', image: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Sugarcane_field.jpg', moistureRange: '40-60%' },
          { name: 'केरा (Banana)', description: 'केरा प्राय: नमीयुक्त माटोमा उत्कृष्ट फल्छ। यसका लागि उच्च आर्द्रता आवश्यक छ।', image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Banana_tree.jpg', moistureRange: '50-70%' },
          { name: 'नारिवल (Coconut)', description: 'नारिवल प्राय: तटीय क्षेत्रमा राम्रोसँग हुर्कन्छ। यसलाई आर्द्र माटो चाहिन्छ।', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Coconut_palms.jpg', moistureRange: '40-60%' },
          { name: 'मेवा (Papaya)', description: 'मेवालाई उष्णकटिबंधीय जलवायुमा फलाउन सकिन्छ। यसले राम्रो उपज दिन उच्च आर्द्रता आवश्यक पर्छ।', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Carica_papaya_1.jpg', moistureRange: '40-60%' }
        );
      } else if (moistureLevel <=500) {
        seedSuggestions.push(
          { name: 'गहुँ (Wheat)', description: 'गहुँलाई मध्यम आर्द्रता आवश्यक पर्छ। यसलाई प्राय: शीतकालीन क्षेत्रमा फलाइन्छ।', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Wheat_field_in_Nord_Jutland_Denmark.JPG', moistureRange: '20-40%' },
          { name: 'मकै (Corn)', description: 'मकै मध्यम आर्द्रतामा राम्रोसँग हुर्कन्छ। यसलाई उच्च तापमान पनि सहन सक्छ।', image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Zea_mays_-_corn.jpg', moistureRange: '25-45%' },
          { name: 'आलु (Potato)', description: 'आलु प्राय: मध्यम पानी आवश्यक पर्ने बाली हो। यसलाई धेरै उच्च आर्द्रता चाहिँदैन।', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Potato_field.jpg', moistureRange: '30-50%' },
          { name: 'प्याज (Onion)', description: 'प्याजलाई न्यून पानी आवश्यकता हुन्छ। यसलाई मध्यम आर्द्रतामा राम्रो उत्पादन हुन्छ।', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Onion_vegetable.jpg', moistureRange: '20-30%' },
          { name: 'बन्दाकोपी (Cabbage)', description: 'बन्दाकोपी प्राय: मध्यम पानी र तापमानमा राम्रो उत्पादन दिन्छ।', image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Cabbage.jpg', moistureRange: '30-40%' },
          { name: 'केराउ (Peas)', description: 'केराउलाई चिसो जलवायु मन पर्छ। यसलाई मध्यम आर्द्रता आवश्यक पर्छ।', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Peas_in_pods_-_Studio.jpg', moistureRange: '20-30%' }
        );
      } else {
        seedSuggestions.push(
          { name: 'कोदो (Millet)', description: 'कोदो सुख्खा अवस्थाहरूमा राम्रोसँग हुर्कन्छ। यसलाई न्यून पानी आवश्यकता हुन्छ।', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Millet.jpg', moistureRange: '10-20%' },
          { name: 'जौं (Barley)', description: 'जौंलाई शुष्क मौसम मन पर्छ। यसले न्यून आर्द्रता पनि सहन सक्छ।', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Barley_field.jpg', moistureRange: '15-25%' },
          { name: 'फर्सी (Pumpkin)', description: 'फर्सीलाई शुष्क वातावरणमा फलाउन सकिन्छ। यसले थोरै पानीमा राम्रो उत्पादन दिन्छ।', image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Pumpkin_in_field.jpg', moistureRange: '10-20%' },
          { name: 'गाजर (Carrot)', description: 'गाजर न्यून पानीमा हुर्कन सकिन्छ। यसले शुष्क माटोमा पनि उत्पादन दिन्छ।', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Carrot.jpg', moistureRange: '10-30%' },
          { name: 'सूर्यमुखी (Sunflower)', description: 'सूर्यमुखी प्राय: घामको रुख तिर बढ्छ। यसलाई न्यून आर्द्रता चाहिन्छ।', image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower.jpg', moistureRange: '15-25%' },
          { name: 'खुर्सानी (Capsicum)', description: 'खुर्सानीलाई गर्मी वातावरणमा हुर्काउन सकिन्छ। यसलाई मध्यम आर्द्रता आवश्यक पर्छ।', image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Capsicum_annuum.jpg', moistureRange: '20-35%' }
        );
      }

   

    setSuggestions(seedSuggestions);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>माटोको आर्द्रता पत्ता लगाउनुहोस्</Text>
      <Button title="माटो पत्ता लगाउनुहोस्" onPress={fetchMoistureData} />

      {loading && <ActivityIndicator size="large" color="#00ff00" />}

      {error && <Text style={styles.error}>{error}</Text>}

      {moisture !== null && !loading && (
        <View style={styles.dataContainer}>
          <Text style={styles.label}>माटोको आर्द्रता: {moisture} %</Text>

          <Text style={styles.label}>सुझाव गरिएका बालीहरू:</Text>

          <ScrollView style={styles.suggestionContainer}>
            {suggestions.map((seed, index) => (
              <View key={index} style={styles.seedCard}>
                <Image source={{ uri: seed.image }} style={styles.seedImage} />
                <View style={styles.seedText}>
                  <Text style={styles.seedName}>{seed.name}</Text>
                  <Text style={styles.seedDescription}>{seed.description}</Text>
                  <Text style={styles.seedMoisture}>आर्द्रताको उपयुक्त दायरा: {seed.moistureRange}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0f7fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#00796b',
  },
  label: {
    fontSize: 18,
    marginVertical: 5,
    color: '#00796b',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  dataContainer: {
    marginTop: 20,
  },
  suggestionContainer: {
    marginTop: 20,
  },
  seedCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  seedImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  seedText: {
    flex: 1,
    justifyContent: 'center',
  },
  seedName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796b',
  },
  seedDescription: {
    fontSize: 16,
    color: '#555',
  },
  seedMoisture: {
    fontSize: 14,
    color: '#00796b',
    marginTop: 5,
  },
});

export default DetectSoil;
