import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PlaceCard = ({ place, onFavoritePress, onSharePress }) => (
  <View style={styles.card}>
    <Image source={{ uri: place.foto }} style={styles.image} />
    <View style={styles.details}>
      <Text style={styles.title}>{place.titulo}</Text>
      <Text style={styles.location}>{place.ubicacion}</Text>
    </View>
    <View style={styles.actions}>
      <TouchableOpacity onPress={onFavoritePress}>
        <Icon name="heart-outline" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onSharePress}>
        <Icon name="share-outline" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default PlaceCard;
