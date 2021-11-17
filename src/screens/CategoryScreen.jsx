import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function CategoryScreen() {

  const [categories, setCategories] = useState([]);

  const [shortCuts, setShorCuts] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState();

  const categoriesJsx = categories.map((item, index) => {
      <Picker.Item value={item.name} label={item.name} key={index} />
    })
  
  const shortCutsJsx = shortCuts.map((shortCut) => (
    <TouchableOpacity>
      <View key={shortCut.id} style={styles.card}>
        <Text style={styles.titleCard}>{shortCut.title}</Text>
        <Text style={styles.softName}>{shortCut.software.name}</Text>
        <View>
          {shortCut.categories.map((p) => (
            <Text key={p.id} style={styles.catName}>
              {p.name}
            </Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  ));

  useEffect(() => {
    fetch(process.env.API_URL + 'categories')
            .then(response => response.json())
            .then(data => setCategories(data['hydra:member']))
  }, [setCategories]);

  return (
    
    <View>
        <Text>Rechercher par catégorie</Text>
        <Picker
          selectedValue={selectedCategories}
          onValueChange={function (c) {
            fetch(process.env.API_URL + "shortcuts?categories.id=" + c)
              .then((response) => response.json())
              .then((data) => setShortcuts(data["hydra:member"]))
              .catch((error) => console.log(error));
            setSelectedCategories(c);
          }}
        >
          {categoriesJsx}
        </Picker>
        {shortCutsJsx}
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
