import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Details = () => {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  