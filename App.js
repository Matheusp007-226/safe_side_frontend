
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import CadastroUsuario from './src/screens/CadastroUsuario'

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
                title:'Local'
              }} 

              />

          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} options={{headerShown: false}} />
        </Stack.Navigator>

    </NavigationContainer>
   
  );
}
