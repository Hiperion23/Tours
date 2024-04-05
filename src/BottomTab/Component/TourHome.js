import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PlaceCard from './PlaceCard'; 

const TourHome = ({ route }) => {
  const { nombreDepartamento, lugaresTurísticos } = route.params;

  const renderPlaceCard = ({ item }) => (
    <PlaceCard
      place={item}
      onFavoritePress={() => console.log('Favorito', item.titulo)}
      onSharePress={() => console.log('Compartir', item.titulo)}
    />
  );

  return (
    <FlatList
      data={lugaresTurísticos}
      renderItem={renderPlaceCard}
      keyExtractor={item => item.id.toString()} 
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#f0f0f0',
  },

});

export default TourHome;
