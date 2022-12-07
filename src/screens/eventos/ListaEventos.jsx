import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { StyleSheet,View,TouchableOpacity, Text, FlatList} from 'react-native';
import { Octicons } from '@expo/vector-icons';
import EventoResumo from './../../components/modal/EventoResumo';
import Eventos from '../../components/modal/Eventos';
import Context from '../../components/context'

export default function ListaEventos({ navigation, route }) {
  
  const [eventos, setEventos] = useContext(Context);
  const [eventosLocal, setEventosLocal] = useState();

  useEffect(() => {

      if(route.params.endereco){
        console.log(route.params.endereco)
          // setEventosLocal(eventos.filter(item => item.latitude === route.params.coordenadas.latitude && item.longitude === route.params.coordenadas.longitude));
          setEventosLocal(eventos.filter(item => item.endereco === route.params.endereco));
        
      }

  }, []);

  return (

    <View style={styles.container}>

       <Text style={styles.textLabelPrincipal}>Resumo</Text>

       <EventoResumo 
        freq="Levemente habitual" 
        status="Perigo moderado" 
        endereco={route.params.local}
        estrelas={3}
       />

        <Text style={styles.textLabelPrincipal}>Todos os eventos</Text>

            <FlatList 
                data={eventosLocal}
                keyExtractor={item => item.id}
                renderItem={({item}) => 
                        <Eventos 
                            id={item.id}
                            categoria={item.categoria} 
                            nomeUsuario={item.nomeUsuario} 
                            endereco={item.endereco}
                            data={item.data}
                            hora={item.hora}
                        />
                }
            />
        </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textLabelPrincipal:{
    fontSize: 26,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: '7.5%',
    marginBottom: 15,
    marginTop: 40
  }
});