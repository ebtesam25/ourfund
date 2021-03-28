import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './src/screens/welcome';
import Login from './src/screens/login';
import Register from './src/screens/register';
import Register2 from './src/screens/register2';
import MOnetary from './src/screens/monetary';
import Orient1 from './src/screens/orient1';
import Orient2 from './src/screens/orient2';
import Orient3 from './src/screens/orient3';
import Home from './src/screens/home';



const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
    >
      <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Register" 
        component={Register} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Register2" 
        component={Register2} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Monetary" 
        component={MOnetary} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Orient1" 
        component={Orient1} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Orient2" 
        component={Orient2} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Orient3" 
        component={Orient3} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false}} 
      />
  
    
    
     
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}