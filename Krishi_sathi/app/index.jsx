import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Components/LoginScreen';
import RegisterScreen from '../Components/RegisterScreen';
import ProductForm from '../Components/ProductForm';
import SeedVisualizer from '../Components/SeedVisualizer';
import HomePage from '../Components/HomePage';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  return (
    
      <Stack.Navigator initialRouteName={isLoggedIn ? 'HomePage' : 'Login'}>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
        >
          {(props) => (
            <LoginScreen
              {...props}
              setIsLoggedIn={setIsLoggedIn}
              setUserName={setUserName}
            />
          )}
        </Stack.Screen>
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
        <Stack.Screen name="SeedVisualizer" component={SeedVisualizer} />
        <Stack.Screen
          name="HomePage"
          options={{ headerShown: false }}
        >
          {(props) => <HomePage {...props} isLoggedIn={isLoggedIn} userName={userName} />}
        </Stack.Screen>
      </Stack.Navigator>
    
  );
};

export default App;