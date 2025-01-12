import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Components/LoginScreen'; // Update this path based on your file structure

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Hide the header if needed
        />
        {/* Add other screens like Home here */}
      </Stack.Navigator>
  
  );
};

export default App;