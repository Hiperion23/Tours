import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import TourHome from './Component/TourHome';

const departamentos = [
  { nombre: 'Amazonas', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStdoq7KHNvnyhKVeBh113xrdVb7uYiJmo0cdRPWjxFBZhwCCz9D-217_fmAYnrQwQ1Abc&usqp=CAU' },
  { nombre: 'Ancash', imagen: 'https://turismoi.pe/uploads/nature/image/2058/medium_8b_Huascaran.jpg' },
  { nombre: 'Apurímac', imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/d2/7f/1d/plaza-de-armas.jpg?w=600&h=400&s=1' },
  { nombre: 'Arequipa', imagen: 'https://cdn.pixabay.com/photo/2017/05/12/23/09/arequipa-2308382_1280.jpg' },
  { nombre: 'Ayacucho', imagen: 'https://t4.ftcdn.net/jpg/00/79/01/47/360_F_79014786_xc3rwE58JuuY68o5u4VvwLY228pLkxKX.jpg' },
  { nombre: 'Cajamarca', imagen: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/30/13/1c.jpg' },
  { nombre: 'Cusco', imagen: 'https://c4.wallpaperflare.com/wallpaper/270/384/844/white-black-and-blue-bugatti-veyron-wallpaper-preview.jpg' },
  { nombre: 'Huancavelica', imagen: 'https://portal.andina.pe/EDPfotografia3/Thumbnail/2022/08/05/000888476W.jpg' },
  { nombre: 'Huánuco', imagen: 'https://propuestapais.pe/wp-content/uploads/2019/12/Esgl%C3%A9sia_de_San_Sebasti%C3%A1n_de_Hu%C3%A1nuco_el_gener_de_2017-1024x768.jpg' },
  { nombre: 'Ica', imagen: 'https://www.xtravelperu.com/blog/wp-content/uploads/2021/05/ica-ciudad-x-travel-peru.jpg' },
  { nombre: 'Junín', imagen: 'https://elcomercio.pe/resizer/YUhGVaywcTYukg5i1BMiasmtvKM=/400x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DYGSO62OIVB47HSWMITRLBD7CM.jpg' },
  { nombre: 'La Libertad', imagen: 'https://www.orbitaradio.com.pe/wp-content/uploads/2016/08/plazadearmasdetrujillo.jpg' },
  { nombre: 'Lambayeque', imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Cathedral_of_Lambayeque.jpg' },
  { nombre: 'Lima', imagen: 'https://c4.wallpaperflare.com/wallpaper/674/99/752/cities-lima-city-coast-wallpaper-preview.jpg' },
  { nombre: 'Loreto', imagen: 'https://www.lampadia.com/assets/uploads_images/images/a1%28134%29.jpg' },
  { nombre: 'Madre de Dios', imagen: 'https://www.peru.travel/Contenido/Destino/Imagen/en/23/1.1/Principal/Tambopata.jpg' },
  { nombre: 'Moquegua', imagen: 'https://cdn.www.gob.pe/uploads/document/file/574539/standard_MOQUEGUA_FOTO_ANDINA.jpg' },
  { nombre: 'Pasco', imagen: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_-v0k8FONYyBgeZM649IRksCtLAxjqfnP9eFbfDZmvCGhpcJ3vhUfdAZIyrhPFWOnx1G6zZzIhe-BXpdTu_j_AHP76MdEjbkrOrH0g35_Xztw5edGpJEgHaQLXKyQY_VeBXDP3n0pDkk/s1600/P1100441.jpg' },
  { nombre: 'Piura', imagen: 'https://www.elregionalpiura.com.pe/images/Fotografias/2019/Enero_2019/Plaza-de-Armas-de-Piura.jpg' },
  { nombre: 'Puno', imagen: 'https://www.tourinperu.com/wp-content/uploads/2020/08/uros-taquile-05.webp' },
  { nombre: 'San Martín', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Moyobamba%2C_Peru%2C_2018.jpg/800px-Moyobamba%2C_Peru%2C_2018.jpg' },
  { nombre: 'Tacna', imagen: 'https://lh5.googleusercontent.com/p/AF1QipM61iwk7WurGj6efTw-H-rWQEjORiiQZlfO07dB=s296-w296-h168-n-k-no-v1' },
  { nombre: 'Tumbes', imagen: 'https://peru.info/archivos/publicacion/323-imagen-152247712022.jpg' },
  { nombre: 'Ucayali', imagen: 'https://v2.cdnpk.net/videvo_files/video/premium/partners1074/thumbnails/BB_3f610b8f-d25e-4f22-8ed8-38e1eed9e267_small.jpg' },
];

const HomeContent = () => {
    const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Elige tu Destino</Text>
        <ScrollView contentContainerStyle={styles.grid}>
          {departamentos.map((depto, index) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => navigation.navigate('TourHome', { nombreDepartamento: depto.nombre })}>
              <ImageBackground
                source={{ uri: depto.imagen }}
                resizeMode="cover"
                style={styles.image}>
                <Text style={styles.itemText}>{depto.nombre}</Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };
  const Stack = createStackNavigator();

const Home = () => {

    return (
        <Stack.Navigator initialRouteName="HomeContent" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeContent" component={HomeContent}/>
        <Stack.Screen name="TourHome" component={TourHome}/>
      </Stack.Navigator>
    );
  };
  
  export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },
  item: {
    width: '50%',
    height: 180, 
    padding: 4,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 70,
    backgroundColor: '#0D6111',
    color: 'white',
    padding: 10,
    borderRadius: 8
  },
});
