import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Components/LoginScreen';
import RegisterScreen from '../Components/RegisterScreen';
import  ProductForm from '../Components/ProductForm';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
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
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
