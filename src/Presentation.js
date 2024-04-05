import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Buttons } from '../components/Buttons'; 
import Index from './Index';
const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const imagen = { uri: 'https://i.pinimg.com/originals/af/d8/5c/afd85c663ceac9f5b0d5665cff3ec004.jpg' };
  return (
    <View style={styles.container}>
      <ImageBackground source={imagen} resizeMode='cover' style={styles.image}>
        <Text style={styles.text}>Estás Listo?</Text>
        <Text style={styles.texto}>Planea tu viaje y disfruta {'\n'}de la naturaleza.</Text>
        <Buttons onPress={() => navigation.navigate('Index')} />
      </ImageBackground>
    </View>
  );
};

const Presentation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Index" component={Index} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: '#f1f1f1',
    fontWeight: 'bold',
    fontSize: 30,
    position: 'absolute',
    right: '55%',
    bottom: '30%'
  },
  texto: {
    color: '#f1f1f1',
    position: 'absolute',
    fontSize: 20,
    right: '40%',
    bottom: '23%'
  }
});

export default Presentation;
