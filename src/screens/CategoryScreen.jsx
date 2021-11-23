import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function CategoryScreen(props) {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [shortcuts, setShortcuts] = useState([]);

  useEffect(() => {
    fetch(process.env.API_URL + "categories")
      .then((response) => response.json())
      .then((data) => setCategories(data["hydra:member"]))
      .catch((error) => console.log(error));
  });

  const categorieJsx = categories
    .sort((category1, category2) => category1.name.localeCompare(category2.name))
    .map((category) => <Picker.Item key={category.id} label={category.name} value={category.id} />);

  const shortcutsJsx = shortcuts.map((shortCut) => (
    <TouchableOpacity
      key={shortCut.id}
      style={styles.card}
      onPress={() => props.navigation.navigate("shortCut", { shortCut: shortCut })}
    >
      
      <Text style={styles.cardTitle}>{shortCut.title}</Text>
      <Text style={styles.btnSoftware}>{shortCut.software.name}</Text>
      <View>
        {shortCut.categories.map((category) => (
          <Text key={category.id} style={styles.btnCategory}>
            {category.name}
          </Text>
        ))}
      </View>
      
      
    </TouchableOpacity>
  ));

  return (
    <View style={styles.container}>
      <ScrollView>
        <Picker
          selectedValue={selectedCategory}
          style={{ height: 70, width: 250 }, styles.picker}
          onValueChange={function (category) {
            fetch(process.env.API_URL + "shortcuts?categories.id=" + category)
              .then((response) => response.json())
              .then((data) => setShortcuts(data["hydra:member"]))
              .catch((error) => console.log(error));
            setSelectedCategory(category);
          }}
        >
          {categorieJsx}
        </Picker>
        {shortcutsJsx}
      </ScrollView>
    </View>
  );
}

//   const [categories, setCategories] = useState([]);

//   const [shortCuts, setShorCuts] = useState([]);

//   const [selectedCategories, setSelectedCategories] = useState();

//   const categoriesJsx = categories.map((item, index) => {
//       <Picker.Item value={item.name} label={item.name} key={index} />
//     })
  
//   const shortCutsJsx = shortCuts.map((shortCut) => (
//     <TouchableOpacity>
//       <View key={shortCut.id} style={styles.card}>
//         <Text style={styles.titleCard}>{shortCut.title}</Text>
//         <Text style={styles.softName}>{shortCut.software.name}</Text>
//         <View>
//           {shortCut.categories.map((p) => (
//             <Text key={p.id} style={styles.catName}>
//               {p.name}
//             </Text>
//           ))}
//         </View>
//       </View>
//     </TouchableOpacity>
//   ));

//   useEffect(() => {
//     fetch(process.env.API_URL + 'categories')
//             .then(response => response.json())
//             .then(data => setCategories(data['hydra:member']))
//   }, [setCategories]);

//   return (
    
//     <View>
//         <Text>Rechercher par catégorie</Text>
//         <Picker
//           selectedValue={selectedCategories}
//           onValueChange={function (c) {
//             fetch(process.env.API_URL + "shortcuts?categories.id=" + c)
//               .then((response) => response.json())
//               .then((data) => setShortcuts(data["hydra:member"]))
//               .catch((error) => console.log(error));
//             setSelectedCategories(c);
//           }}
//         >
//           {categoriesJsx}
//         </Picker>
//         {shortCutsJsx}
//     </View>
//   );
// }

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
