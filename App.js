
import React from 'react';
import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Fontisto } from '@expo/vector-icons';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import CadastroUsuario from './src/screens/CadastroUsuario';
import ListaEventos from './src/screens/eventos/ListaEventos';
import ModalListaEventos from './src/components/modal/ModalListaEventos';

const Stack = createStackNavigator();

export default function App() {

  return (

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
        </Stack.Navigator>
        

    </NavigationContainer>
   
  );
}
