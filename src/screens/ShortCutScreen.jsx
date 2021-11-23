import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function ShortCutScreen(props) {

    const shortCut = props.route.params.shortCut;

    return (
        <View style={styles.container}>
            <Text style={styles.cardTitle}>{shortCut.title}</Text>
            <Text style={styles.btnSoftware}>{shortCut.software.name}</Text>
            {shortCut.categories.map((category) => (
                <Text key={category.id} style={styles.btnCategory}>
                    {category.name}

                </Text>
            ))}
            <View style={styles.infosRacc}>
                {/* <Image
                  style={styles.image}
                  source={{ uri: shortCut.image }}
                /> */}
                <Text style={styles.text}>Pour Windows : {shortCut.windows}</Text>
                <Text style={styles.text}>Pour Mac : {shortCut.macos}</Text>
                <Text style={styles.text}>Pour Linux : {shortCut.linux}</Text>
                <Text style={styles.text}>Context : {shortCut.context}</Text>
                <Text style={styles.text}>Description : {shortCut.description}</Text>
            </View>
        </View>
    )
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
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 5,
      marginBottom: 5,
    },
    cardTitle: {
      color: 'white',
      marginTop: 10,
      fontSize: 20,
      marginBottom: 20,
    },
    btnSoftware: {
      color: 'white',
      backgroundColor: '#ffc500',
      borderRadius: 5,
      marginBottom: 10,
      height: 25,
      paddingLeft: 3,
      paddingRight: 3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    btnCategory: {
      backgroundColor: 'white',
      borderRadius: 5,
      margin: 5,
      height: 25,
      paddingLeft: 3,
      paddingRight: 3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    infosRacc: {
        marginTop: 20,
        display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    image: {
      width: 100,
      height: 100,
    },
  });