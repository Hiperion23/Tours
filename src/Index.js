import React from 'react';
import BottomNavigator from './navigation/BottomNavigator';
import { View, StyleSheet } from 'react-native';
import DrawerNavigation from './navigation/DrawerNavigation'
const Index = () => {
  return (
    <View style={styles.container}>
      <BottomNavigator/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Index;
