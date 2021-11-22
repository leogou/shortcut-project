import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function AddScreen(props) {

    const [categories, setCategories] = useState([]);
    const [software, setSoftware] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedSoftware, setSelectedSoftware] = useState("");

    const [title, onChangeTitle] = React.useState(null)
    const [windows, onChangeWindows] = React.useState(null)
    const [linux, onChangeLinux] = React.useState(null)
    const [mac, onChangeMac] = React.useState(null)
    const [context, onChangeContext] = React.useState(null)
    const [description, onChangeDescription] = React.useState(null)
  
    useEffect(() => {
      fetch(process.env.API_URL + "categories")
        .then((response) => response.json())
        .then((data) => setCategories(data["hydra:member"]))
        .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        fetch(process.env.API_URL + "software")
          .then((response) => response.json())
          .then((data) => setSoftware(data["hydra:member"]))
          .catch((error) => console.log(error));
      }, []);
  
    const categorieJsx = categories
      .sort((category1, category2) => category1.name.localeCompare(category2.name))
      .map((category) => <Picker.Item key={category.id} label={category.name} value={category['@id']} />);
  
    const softwareJsx = software
      .sort((software1, software2) => software1.name.localeCompare(software2.name))
      .map((software) => <Picker.Item key={software.id} label={software.name} value={software['@id']} />);
 
    return (
      <View style={styles.container}>
        <ScrollView>
            <Text style={styles.text}>Catégorie :</Text>
            <Picker
                selectedValue={selectedCategory}
                style={{ height: 70, width: 250 }, styles.picker}
                onValueChange={function (category) {
                    setSelectedCategory(category)
                }}
            >
                {categorieJsx}
            </Picker>
            <Text style={styles.text}>Catégorie :</Text>
            <Picker
                selectedValue={selectedSoftware}
                style={{ height: 70, width: 250 }, styles.picker}
                onValueChange={function (software) {
                    setSelectedSoftware(software);
                }}
            >
                {softwareJsx}
            </Picker>
        </ScrollView>
        <Text style={styles.text}>Titre :</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeTitle}
            value={title}
        >
        </TextInput>
        <Text style={styles.text}>Sur Windows :</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeWindows}
            value={windows}
        >
        </TextInput>
        <Text style={styles.text}>Sur Linux :</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeLinux}
            value={linux}
        >
        </TextInput>
        <Text style={styles.text}>Sur Mac :</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeMac}
            value={mac}
        >
        </TextInput>
        <TextInput
            style={styles.input}
            placeholder="Contexte"
            onChangeText={onChangeContext}
            value={context}
        >
        </TextInput>
        <TextInput
            style={styles.area}
            placeholder="Description"
            onChangeText={onChangeDescription}
            value={description}
        >
        </TextInput>
        <TouchableOpacity
            onPress = {() => {
                    fetch(process.env.API_URL + "shortcuts", {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            categories: [selectedCategory],
                            software: selectedSoftware,
                            title: title,
                            windows: windows,
                            linux: linux,
                            macos: mac,
                            context: context,
                            description: description
                        })
                    });
                }
            }
        >
            <Text style={styles.buttonText}>Soumettre</Text>
        </TouchableOpacity>
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
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        color: 'black',
      },
      area: {
        height: 120,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        color: 'black',
        flex: 1,
        flexDirection: 'row',
        flexShrink: 1,
      },
      buttonText: {
          backgroundColor: '#ffc500',
          color: 'white',
          fontSize: 30,
          fontWeight: 'bold',
          padding: 6,
          borderRadius: 5,
          marginTop: 10,
      }
  });
  