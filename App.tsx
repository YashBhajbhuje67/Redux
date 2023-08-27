import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './components/LoginPage';
import Form from './components/Form';
import Display from './components/Display';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={LoginPage} />
        <Stack.Screen name='form' component={Form} />
        <Stack.Screen name='display' component={Display} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App