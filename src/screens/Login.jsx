import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet,KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Alert, Image} from 'react-native';
import { Octicons } from '@expo/vector-icons';

export default function Login({ navigation }) {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const logIn = () => {

    if(login === '' || password === ''){

        Alert.alert('Preencha todos os campos!');

    }else{

        // Alert.alert('Usuário logado com sucesso!');
        navigation.navigate('Home');
    }

  }

  const register = () =>{
    navigation.navigate('CadastroUsuario');
  }

  useEffect(() => {
    
  }, []);

  return (

    <KeyboardAvoidingView style={styles.container}>

       <TouchableOpacity style={styles.btnImg}>
            <Image 
                source={require('../assets/logo.jpg')} 
                style={styles.btnLogo} 
            /> 
       </TouchableOpacity>

       <Text style={styles.label} >E-mail</Text>

       <TextInput style={styles.inputs} value={login} onChangeText={(text) => setLogin(text)}
       placeholder='Informe o e-mail da sua conta' />

       <Text style={styles.label} >Senha</Text>

       <TextInput style={styles.inputs} value={password} onChangeText={(text) => setPassword(text)}
       placeholder='Informe a sua senha' />

       <TouchableOpacity style={styles.btnEntrar} onPress={() => logIn()}>
            <Text style={styles.textEntrar}>ENTRAR</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={() => register()}>
            <Text style={styles.textRegister}>Cadastre-se</Text>
       </TouchableOpacity>
       

    </KeyboardAvoidingView> 
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs:{
    width: '94%',
    height: 55,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#FFF', 
    marginBottom: 40,
    fontSize: 18,
    padding: 10
  },
  btnEntrar:{
    width: '94%',
    height: 55,
    backgroundColor: '#B5FF01',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textEntrar:{
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20
  },
  btnImg:{
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#B5FF01',
    marginBottom: 80
  },
  label: {
    color: '#fff',
    alignSelf: 'flex-start',
    marginLeft: '3%',
    fontSize: 16,
    marginBottom: 5
  },
  textRegister:{
    color: '#fff',
    fontSize: 16,
    marginTop: 15
  },
  btnLogo:{
    width: '100%',
    height: '100%',
    borderRadius: 100
  }
});