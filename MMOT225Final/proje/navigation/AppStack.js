import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {StyleSheet} from 'react-native';
import { View } from 'native-base';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
     <Stack.Navigator >
      <Stack.Screen  name=' ' component={HomeScreen} />
    </Stack.Navigator>
   
  );
}

export default AppStack;