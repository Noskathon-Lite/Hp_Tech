import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Components/LoginScreen';
import RegisterScreen from '../Components/RegisterScreen';
import  ProductForm from '../Components/ProductForm';
import  SeedVisualizer from '../Components/SeedVisualizer';
import HomePage from '../Components/HomePage'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer> 
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ProductForm" 
          component={ProductForm} 
          options={{ headerShown: false }} 
        />

<Stack.Screen 
          name="SeedVisualizer" 
          component={SeedVisualizer} 
          />
          
         <Stack.Screen 
          name="HomePage" 
          component={HomePage} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
