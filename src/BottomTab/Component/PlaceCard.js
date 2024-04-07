import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PlaceCard = ({ place }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: place.imagen }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{place.titulo}</Text>
        <View style={styles.ratingContainer}>
          <MaterialIcons name="star" color="#FFD700" size={18} />
          <Text style={styles.rating}>{place.calificacion}</Text>
        </View>
        <Text style={styles.description}>{place.descripcion}</Text>
      </View>
      <TouchableOpacity style={styles.favoriteButton}>
        <MaterialIcons name="favorite-border" size={24} color="#FF0000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
  },
  details: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
  },
  description: {
    fontSize: 12,
    color: '#333',
  },
  favoriteButton: {
    justifyContent: 'center',
    paddingRight: 10,
  },
});

export default PlaceCard;
