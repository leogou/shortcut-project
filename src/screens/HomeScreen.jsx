import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen(props) {



  return (
    <View style={styles.container}>
        <Text style={styles.text}>Rechercher un raccourci par :</Text>
        <TouchableOpacity
            onPress={() => props.navigation.navigate('Category')}
            style={styles.buttonTouchCat}
        >
            <Text style={styles.buttonText}>Catégories</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => props.navigation.navigate('Software')}
            style={styles.buttonTouchSoft}
        >
            <Text style={styles.buttonText}>Logiciel</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Ou bien?</Text>
        <TouchableOpacity
            onPress={() => props.navigation.navigate('Add')}
            style={styles.buttonTouchRacc}
        >
            <Text style={styles.buttonText}>Ajouter un raccourci</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    
  },
  text: {
    color: 'white',
    marginTop: 50,
    marginBottom: 60,
  },
  buttonTouchCat: {
    backgroundColor: '#ffc500',
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 50,
    marginBottom: 30,
    borderRadius: 5,
  },
  buttonTouchSoft: {
    backgroundColor: '#ffc500',
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 50,
    marginBottom: 30,
    borderRadius: 5,
  },
  buttonTouchRacc: {
    backgroundColor: '#ffc500',
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 50,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
});
