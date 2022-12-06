
import React, { useState } from 'react';
import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Fontisto } from '@expo/vector-icons';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import CadastroUsuario from './src/screens/CadastroUsuario';
import ListaEventos from './src/screens/eventos/ListaEventos';
import ModalListaEventos from './src/components/modal/ModalListaEventos';
import EventoAtual from './src/components/modal/EventoAtual';
import DetalheEvento from './src/screens/eventos/DetalheEvento';
import CadastrarEvento from './src/screens/eventos/CadastrarEvento';
import Context from './src/components/context';

const Stack = createStackNavigator();

export default function App() {

  const dados = [
    {   
        id: '1',
        categoria: 'Incêndio',
        nomeUsuario: 'Matheus Pimentel', 
        endereco: 'Rua Arhur Azevedo, n 215, Pernambués',
        descricao: 'blablakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
        data: '10/06/2022',
        hora: '19:30',
        latitude: -12.9812172,
        longitude: -38.4649511
    },
    {
        id: '2',
        categoria: 'Tiroteio',
        nomeUsuario: 'Anônimo', 
        endereco: 'Rua Arábia Saudita, n 159, Pernambués',
        descricao: 'ahahahahahahahahahahahahhaahahahahhahahahahahhahahahahah',
        data: '05/10/2021',
        hora: '07:36',
        latitude: -12.9812172,
        longitude: -38.4649511
    },
    {
        id: '3',
        categoria: 'Acidente de trânsito',
        nomeUsuario: 'Bianca Souza', 
        endereco: 'Rua Barbosa Correia, n 59, Pernambués',
        descricao: 'fluflufluflfufiufufufufufufufufufufuufufufufufufufufuufufufufufuufufufufuf',
        data: '25/08/2022',
        hora: '20:40',
        latitude: -12.9812172,
        longitude: -38.4649511
    }
  ];

  const [eventos, setEventos] = useState(dados);

  return (

    <Context.Provider value={[eventos, setEventos]}>
        <NavigationContainer>

            <Stack.Navigator initialRouteName='Login'>
              
                  <Stack.Screen name="Home" component={Home} 
                    options={{

                      headerStyle:{
                      borderBottomWidth: 1,
                      borderColor: '#000',
                      backgroundColor: '#D9D9D9'
                    },
                    cardStyle:{
                        backgroundColor: '#f8f8'
                    },
                    title:<Text style={{fontWeight: 'bold', fontSize: 24}}>Local</Text> 
                  }} 
                  />

            
              <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
              <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} options={{headerShown: false}} />
              <Stack.Screen name="ListaEventos" component={ListaEventos} 
                options={{

                  headerStyle:{
                  borderBottomWidth: 1,
                  borderColor: '#000',
                  backgroundColor: '#D9D9D9'
                },
                cardStyle:{
                    backgroundColor: '#f8f8'
                },
                title:<Text style={{fontWeight: 'bold', fontSize: 24}}>Eventos</Text> 
              }} 
              />

              <Stack.Screen name="ModalListaEventos" component={ModalListaEventos} />
              <Stack.Screen name="EventoAtual" component={EventoAtual} options={{headerShown: false}} />
              <Stack.Screen name="DetalheEvento" component={DetalheEvento} />
              <Stack.Screen name="CadastrarEvento" component={CadastrarEvento} />
            </Stack.Navigator>
            

        </NavigationContainer>
    </Context.Provider>
   
  );
}
