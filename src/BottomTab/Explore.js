import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';

const Explore = () => {
  const [origin, setOrigin] = React.useState({
    latitude: -9.930356,
    longitude: -76.238440,
  })
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      initialRegion={{ 
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04
       }}>
        <Marker
        draggable
        coordinate={origin}
        onDragEnd={(direction)=>setOrigin(direction.nativeEvent.coordinate)}
        />
       </MapView>
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });
  