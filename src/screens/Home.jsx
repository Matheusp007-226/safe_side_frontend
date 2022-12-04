
import React from 'react';
import { useState, useEffect } from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet,Dimensions, Modal, View, Keyboard, TouchableOpacity} from 'react-native';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Octicons } from '@expo/vector-icons';
import ModalListaEventos from '../components/modal/ModalListaEventos';
import FabButton from '../components/fabButton/';

export default function Home({navigation}) {

  const [marginTop, setMarginTop] = useState(20);
  const [topListView, setTopListView] = useState(70);

  const cadastrarEvento = () =>{
        let local = {latitude: location.coords.latitude, longitude: location.coords.longitude };

        console.log(local)

        navigation.navigate('CadastrarEvento', {coordenadas: local});
  }

  const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setMarginTop(160);
      setTopListView(180);
  });

  const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
    setMarginTop(20);
    setTopListView(70);
  });

  const [region,setRegion] = React.useState({latitude: -13.0073,longitude: -38.4982,latitudeDelta: 0.000922,longitudeDelta: 0.000421})
  const [marker,setMarker] = useState({title:'', description: ''});
  const [modalEventos, setModalEventos] = useState(true);

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
      console.log(location)
      setRegion({...region, latitude: location.coords.latitude, longitude: location.coords.longitude})
    })();
  }, []);


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

                    setRegion({...region, latitude: details.geometry.location.lat, longitude: details.geometry.location.lng})
                    // console.log(data, details);
                    setMarker({...marker,title: details.name});
                    console.log(details.formatted_address)
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
                   <ModalListaEventos local='Pernambués' qtdEventos={56} fecharModal={setModalEventos} />
            </Modal>
              
            
           

            <MapView region={region} style={styles.map}>

                <Marker
                  coordinate={region}
                  title={marker.title}
                  description={marker.description}
                />

           </MapView>

           <TouchableOpacity style={styles.btnFabButton} onPress={() => cadastrarEvento()}>
                <FabButton />
           </TouchableOpacity>
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
  }
});