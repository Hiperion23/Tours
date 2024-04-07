import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const Create = () => {
  const [nombreLugar, setNombreLugar] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [imageUri, setImageUri] = useState('');

  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000 });
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const elegirFoto = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Usuario canceló la selección de imagen');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = response.assets[0].uri;
        console.log('Foto seleccionada: ', source);
        setImageUri(source);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, animatedStyles]}>Crear Nuevo Contenido</Animated.Text>

      <TouchableOpacity onPress={elegirFoto} style={styles.button}>
        <Text>Seleccionar Foto</Text>
      </TouchableOpacity>

      {imageUri ? (
        <Animated.Image source={{ uri: imageUri }} style={[styles.image, animatedStyles]} />
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Nombre del Lugar"
        onChangeText={setNombreLugar}
        value={nombreLugar}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        onChangeText={setDescripcion}
        value={descripcion}
        multiline
      />
      
      <TextInput
        style={styles.input}
        placeholder="Ubicación"
        onChangeText={setUbicacion}
        value={ubicacion}
      />

      <Picker
        selectedValue={departamento}
        onValueChange={(itemValue, itemIndex) => setDepartamento(itemValue)}
        style={styles.picker}>
        <Picker.Item label="Seleccione un departamento" value="" />
        <Picker.Item label="Lima" value="lima" />
        <Picker.Item label="Cuzco" value="cuzco" />
        <Picker.Item label="Arequipa" value="arequipa" />
      </Picker>

      <Button title="Subir Contenido" onPress={() => console.log('Subir contenido...')} />
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  picker: {
    width: '100%',
    marginBottom: 15,
  },
  button: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#eee',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 15,
  },
});
