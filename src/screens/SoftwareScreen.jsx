import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CategoryScreen() {

  return (
    <View>
        <Text>Rechercher par Logiciel</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  }
});
