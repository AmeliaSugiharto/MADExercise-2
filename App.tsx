import React from 'react';
import { Text, View, Image, TextInput, ScrollView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title}>Hi everyone ⋆⭒˚.⋆</Text>
      </View>  
      <Image style={styles.image} source={require('./assets/flowers.jpg')} />
      <TextInput placeholder='Username' style={styles.input} />
      <TextInput placeholder='Email' style={styles.input} />
      <TextInput placeholder='Password' style={styles.input} />
    </ScrollView>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'pink',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center', 
    backgroundColor: '#e8dce6',
    width: '110%',
  },
  image: {
    width: 450,
    height: 300,
  },
  input: {
    borderWidth: 1,
    width: 200,
    margin: 5,
    padding: 10,
    borderRadius: 80,
  }
})

export default App;
