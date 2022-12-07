
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet,Dimensions, Modal, View, Keyboard, TouchableOpacity, TouchableWithoutFeedback, Animated} from 'react-native';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Octicons } from '@expo/vector-icons';
import ModalListaEventos from '../components/modal/ModalListaEventos';
import FabButton from '../components/fabButton/';
import FabButtonMenu from '../components/FabButton';
import Context from '../components/context';
import { AntDesign, Entypo } from '@expo/vector-icons';

export default function Home({navigation}) {

  const [marginTop, setMarginTop] = useState(20);
  const [topListView, setTopListView] = useState(70);
  const [eventos, setEventos, usuarios, setUsuarios, usuarioLogado, setUsuarioLogado, comentarios, setComentarios, resumoEventos, setResumoEventos] = useContext(Context);

  const cadastrarEvento = () =>{
        let local = {latitude: location.coords.latitude, longitude: location.coords.longitude, endereco: region.endereco};

        console.log(local)

        navigation.navigate('CadastrarEvento', {coordenadas: local});
  }

  const showModalEventos = () =>{
    setModalEventos(true);
  }

  const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setMarginTop(160);
      setTopListView(180);
  });

  const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
    setMarginTop(20);
    setTopListView(70);
  });

  const [region,setRegion] = React.useState({latitude: -13.0064403,longitude: -38.4800165,latitudeDelta: 0.000922,longitudeDelta: 0.000421})
  const [marker,setMarker] = useState({title:'', description: ''});
  const [modalEventos, setModalEventos] = useState(false);
  // const [resumoEventos, setResumoEventos] = useState({qtd: 0, endereco: ''});
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
      console.log('região');
      console.log(region);
      // setRegion({...region, latitude: location.coords.latitude, longitude: location.coords.longitude})
    })();
  }, []);


  useEffect(() => {

      // let eventos_filtro = eventos.filter(item => (item.latitude == region.latitude && item.longitude == region.longitude));
      let eventos_filtro = eventos.filter(item => (item.endereco === region.endereco));

      if(eventos_filtro.length > 0){

          let qtdEventos = eventos_filtro.length;

          setResumoEventos({qtd: qtdEventos, endereco: eventos_filtro[0].endereco.split(',')[0]});

          setModalEventos(true);

          console.log('status modal eventos 2');
          console.log(modalEventos);
      }


      console.log('---------------------------------------------------------------------------------------------------')
      console.log(eventos_filtro);

  }, [region]);


  let animation = new Animated.Value(0);
 

  const toogleMenu = () => {

    let open;
    const toValue = open ? 0 : 1;

    Animated.spring(animation, {
      toValue,
      friction: 5,
      useNativeDriver: true
    }).start();

    open = !open;

  }

  const likeStyle = {

    transform: [
      { scale: animation},
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -140]
        })
      }
    ]
    
  }

  const cameraStyle = {

    transform: [
      { scale: animation},
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -80]
        })
      }
    ]
  }

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0,1],
          outputRange: ["0deg", "45deg"]
        })
      }
    ]
  }


  return (
    <View style={styles.container}>

      <GooglePlacesAutocomplete
                  renderLeftButton={()  => <Octicons name="search" size={24} color="black" />}
                  placeholder='Para aonde vamos?'
                  onPress={(data, details = null) => {
                    setDestination({
                      latitude: details.geometry.location.lat,
                      longitude: details.geometry.location.lng,
                      latitudeDelta: 0.000922,
                      longitudeDelta: 0.000421
                    })

                    setRegion({...region, latitude: details.geometry.location.lat, longitude: details.geometry.location.lng, endereco: details.formatted_address})
                    // console.log(data, details);
                    setMarker({...marker,title: details.name});
                    console.log(details.formatted_address)
                    console.log(details.geometry.location);
                  }}
                  query={{
                    key: 'AIzaSyDXhAyCtr6XF6zvZIXLdMgchjv_ON4EJn0',
                    language: 'pt-br',
                  }}
                  fetchDetails={true}
                  styles={{
                    textInputContainer: {
                      width: '94%',
                      maxWidth: '94%',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginTop: marginTop,
                      zIndex: 10,
                      borderWidth: 2,
                      borderRadius: 12,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingLeft: 10,
                    },
                    textInput: {
                      height: 38,
                      color: '#5d5d5d',
                      fontSize: 16,
                      width: '100%',
                    },
                    predefinedPlacesDescription: {
                      color: '#1faadb',
                    },
                    listView: {
                      height: 300,
                      width: '94%',
                      position: 'absolute',
                      top: topListView,
                      left:2,
                      zIndex: 100
                    }
                  }}
                  
            />

              <Modal
                animationType={'slide'}
                transparent={true}
                visible={modalEventos}
                onRequestClose={() => {
                  setModalEventos(!modalEventos);
                }}
            >
                   <ModalListaEventos local={resumoEventos.endereco} qtdEventos={resumoEventos.qtd} coordenadas={region} fecharModal={setModalEventos} endereco={region.endereco} />
            </Modal>
              
            
           

            <MapView region={region} style={styles.map}>

                <Marker
                  coordinate={region}
                  title={marker.title}
                  description={marker.description}
                />

           </MapView>

           {/* <TouchableOpacity style={styles.btnFabButton} onPress={() => cadastrarEvento()}>
                <FabButton />
           </TouchableOpacity> */}

      <View style={[StyleSheet.containerFab, {bottom: 80, right: 25}]}>
            <TouchableWithoutFeedback onPress={() => {showModalEventos()}}>
                <Animated.View style={[styles.button, styles.submenu, likeStyle]}>
                    <AntDesign name="heart" size={24} color="#FFF" />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => cadastrarEvento()}>
                <Animated.View style={[styles.button, styles.submenu, cameraStyle]}>
                    <AntDesign name="camera" size={24} color="#FFF" />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => toogleMenu()}>
                <Animated.View style={[styles.button, styles.menu, rotation]}>
                    <AntDesign name="plus" size={24} color="#FFF" />
                </Animated.View>
            </TouchableWithoutFeedback>
      </View>

    </View> 
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 150
  },
  fabBtn:{
    zIndex: 1000
  },
  btnFabButton:{
    magin: 0,
    width: 60,
    height: 60,
    borderRadius: 30, 
    position: 'absolute', 
    right: 25,
    bottom: 60
  },
  contFabBtn:{
    position: 'absolute', 
    right: 25,
    bottom: 60,
  },
  containerFab:{
    alignItems: 'center',
    position: 'absolute',
    
  },
  button:{
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 10,
    shadowColor: '#00213B',
    shadowOpacity: 0.3,
    shadowOffset:{
       height: 10
    }
  },
  menu: {
    backgroundColor: '#00213b'
  },
  submenu:{
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: '#00213B'
  }
});