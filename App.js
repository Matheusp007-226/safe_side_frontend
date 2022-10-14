import React, { useState, useEffect } from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView } from 'react-native';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function App() {

  const [region,setRegion] = React.useState({latitude: -13.0073,longitude: -38.4982,latitudeDelta: 0.000922,longitudeDelta: 0.000421})
  const [marker,setMarker] = useState({title:'', description: ''});

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
    <KeyboardAvoidingView style={styles.container}>

      <GooglePlacesAutocomplete
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
                      width: '100%',
                      marginTop: 80,
                      borderWidth: 2,
                      borderRadius: 12
                    },
                    textInput: {
                      height: 38,
                      color: '#5d5d5d',
                      fontSize: 16,
                      width: '100%'
                    },
                    predefinedPlacesDescription: {
                      color: '#1faadb',
                    },
                    listView: {
                      height: 100,
                      zIndex: 100
                    }
                  }}
                  
            />

        <MapView region={region} style={styles.map}>

                <Marker
                  coordinate={region}
                  title={marker.title}
                  description={marker.description}
                />

          </MapView>

       
    </KeyboardAvoidingView> 
   
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
    height: Dimensions.get('window').height - 150,
    zIndex: 5
  },
});