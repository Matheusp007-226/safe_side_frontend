import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet,View,TouchableOpacity, Text, FlatList} from 'react-native';
import { Octicons } from '@expo/vector-icons';
import EventoResumo from './../../components/modal/EventoResumo';
import Eventos from '../../components/modal/Eventos';

export default function Login({ navigation }) {
  
  const dados = [
    {   
        id: '1',
        categoria: 'Incêndio',
        nomeUsuario: 'Matheus Pimentel', 
        endereco: 'Rua Arhur Azevedo, n 215, Pernambués',
        data: '10/06/2022',
        hora: '19:30'
    },
    {
        id: '2',
        categoria: 'Tiroteio',
        nomeUsuario: 'Anônimo', 
        endereco: 'Rua Arábia Saudita, n 159, Pernambués',
        data: '05/10/2021',
        hora: '07:36'
    },
    {
        id: '3',
        categoria: 'Acidente de trânsito',
        nomeUsuario: 'Bianca Souza', 
        endereco: 'Rua Barbosa Correia, n 59, Pernambués',
        data: '25/08/2022',
        hora: '20:40'
    }
  ];

  const [eventos, setEventos] = useState(dados);

  useEffect(() => {
    
  }, []);

  return (

    <View style={styles.container}>

       <Text style={styles.textLabelPrincipal}>Resumo</Text>

       <EventoResumo 
        freq="Levemente habitual" 
        status="Perigo moderado" 
        endereco="Pernambués, Salvador - BA"
        estrelas={3}
       />

        <Text style={styles.textLabelPrincipal}>Todos os eventos</Text>

            <FlatList 
                data={eventos}
                keyExtractor={item => item.id}
                renderItem={({item}) => 
                        <Eventos 
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