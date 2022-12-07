
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
import {dados} from './src/BD/dadosEventos';
import {dadosUsuarios} from './src/BD/dadosUsuario';
import { dadosComentarios } from './src/BD/dadosComentarios';
import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {

  const [eventos, setEventos] = useState(dados);
  const [usuarios, setUsuarios] = useState(dadosUsuarios);
  const [comentarios, setComentarios] = useState(dadosComentarios);
  const [usuarioLogado, setUsuarioLogado] = useState();
  const [resumoEventos, setResumoEventos] = useState({qtd: 0, endereco: ''});

  return (

    <Context.Provider value={[eventos, setEventos, usuarios, setUsuarios, usuarioLogado, setUsuarioLogado, comentarios, setComentarios, resumoEventos, setResumoEventos]}>
      <PaperProvider>
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
      </PaperProvider>
    </Context.Provider>
   
  );
}
