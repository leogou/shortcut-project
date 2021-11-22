import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import SoftwareScreen from './src/screens/SoftwareScreen';
import ShortCutScreen from './src/screens/ShortCutScreen';
import AddScreen from './src/screens/AddScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen}/>
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={({ route })=> ({ title: 'Catégories' })}
        />
        <Stack.Screen
          name="shortCut"
          component={ShortCutScreen}
          options={({ route })=> ({ title: 'Raccourcis' })}
        />
        <Stack.Screen
          name="Software"
          component={SoftwareScreen}
          options={({ route })=> ({ title: 'Logiciels' })}
        />
        <Stack.Screen
          name="Add"
          component={AddScreen}
          options={({ route })=> ({ title: 'Créer' })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
});
