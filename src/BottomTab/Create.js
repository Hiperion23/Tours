import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Create = () => {
  return (
    <View style={styles.container}>
      <Text>Crear y subir contenido aqui</Text>
    </View>
  )
}

export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
