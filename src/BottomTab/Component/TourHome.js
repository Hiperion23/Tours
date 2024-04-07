import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PlaceCard from './PlaceCard'; 

const TourHome = ({ route }) => {
  const { Amazonas } = route.params;
  const lugaresTurísticos = [
    {
      id: '1',
      titulo: 'Catarata Gocta',
      calificacion: '8.9 Excelente',
      descripcion: 'Salto de agua en Perú',
      imagen: 'https://lh3.googleusercontent.com/p/AF1QipNtYHZmfEKdpnAmnlnGdJmEw-o0bqZKSlGnKH40=s680-w680-h510',
    },
    {
      id: '1',
      titulo: 'Cavernas de Quiocta',
      calificacion: '8.0 Excelente',
      descripcion: 'Atracción turística en Perú',
      imagen: 'https://lh3.googleusercontent.com/p/AF1QipN3oo_3FRv2udCg0RmVo3M7Mu_EGmT13h5EHwpN=s680-w680-h510',
    },
    {
      id: '1',
      titulo: 'Catarata Yumbilla',
      calificacion: '8.9 Excelente',
      descripcion: 'Salto de agua en Perú',
      imagen: 'https://lh3.googleusercontent.com/p/AF1QipNqhnC7CLcTu7TvkBsMZuGqmnMSgrJ0vxdsmq8Q=s680-w680-h510',
    },
    {
      id: '1',
      titulo: 'Mirador del Cañon de Huancas Sonche',
      calificacion: '8.6 Excelente',
      descripcion: 'Parque ecológico en Perú',
      imagen: 'https://lh3.googleusercontent.com/p/AF1QipPEQM2f1cp_iovYTt005LFFrpK5aTEzY5ZH5GlV=s680-w680-h510',
    },
    {
      id: '1',
      titulo: 'Mausoleos de Revash',
      calificacion: '4.7 Excelente',
      descripcion: 'Lugar histórico en Perú',
      imagen: 'https://lh3.googleusercontent.com/p/AF1QipM2lCbHKp77ZTQDcC3kO3EZWtA3Kogoome7K0Ss=s680-w680-h510',
    },
    {
      id: '1',
      titulo: 'Plaza de Armas de Chachapoyas',
      calificacion: '4.3 Excelente',
      descripcion: 'Parque en Chachapoyas',
      imagen: 'https://lh3.googleusercontent.com/p/AF1QipM5H9sGRTd0Xq7FXEgjVTGAy5C4r6fqjzZoD3z6=s680-w680-h510',
    },


  ];

  const renderPlaceCard = ({ item }) => <PlaceCard place={item} />;

  return (
    <FlatList
      data={lugaresTurísticos}
      renderItem={renderPlaceCard}
      keyExtractor={item => item.id}
      style={styles.list}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#f0f0f0',
  },
  listContainer: {
    padding: 16,
    paddingTop: 70,
  },
});

export default TourHome;
