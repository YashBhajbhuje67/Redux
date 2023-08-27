import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './components/LoginPage';
import Display from './components/Display';
import { Provider } from 'react-redux';
import store from './components/store/store';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Response" component={Display} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App