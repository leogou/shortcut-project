import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function SoftwareScreen(props) {

  const [software, setSoftware] = useState([]);
  const [selectedSoftware, setSelectedSoftware] = useState([]);
  const [shortcuts, setShortcuts] = useState([]);

  useEffect(() => {
    fetch(process.env.API_URL + "software")
      .then((response) => response.json())
      .then((data) => setSoftware(data["hydra:member"]))
      .catch((error) => console.log(error));
  }, []);

  const softwareJsx = software
    .sort((software1, software2) => software1.name.localeCompare(software2.name))
    .map((software) => <Picker.Item key={software.id} label={software.name} value={software.id} />);

  const shortcutsJsx = shortcuts.map((shortCut) => (
    <TouchableOpacity
      key={shortCut.id}
      style={styles.card}
      onPress={() => props.navigation.navigate("shortCut", { shortCut: shortCut })}
    >
      
      <Text style={styles.cardTitle}>{shortCut.title}</Text>
      <Text style={styles.btnSoftware}>{shortCut.software.name}</Text>
      <View style={styles.categoriesContainer}>
        {shortCut.categories.map((software) => (
          <Text key={software.id} style={styles.btnCategory}>
            {software.name}
          </Text>
        ))}
      </View>
      
      
    </TouchableOpacity>
  ));

  return (
    <View style={styles.container}>
      <ScrollView>
        <Picker
          selectedValue={selectedSoftware}
          style={styles.picker}
          onValueChange={function (software) {
            fetch(process.env.API_URL + "shortcuts?software.id=" + software)
              .then((response) => response.json())
              .then((data) => setShortcuts(data["hydra:member"]))
              .catch((error) => console.log(error));
            setSelectedSoftware(software);
          }}
        >
          {softwareJsx}
        </Picker>
        {shortcutsJsx}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  picker: {
    marginBottom: 20,
    height: 40,
    width: 250,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ffc500',
    borderRadius: 5,
  },
  cardTitle: {
    color: 'white',
    marginTop: 10,
  },
  btnSoftware: {
    color: 'white',
    backgroundColor: '#ffc500',
    fontWeight: 'bold',
    borderRadius: 5,
    padding: 3,
  },
  btnCategory: {
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 5,
    padding: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
