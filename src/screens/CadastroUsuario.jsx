import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet,KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Alert} from 'react-native';
import { Octicons } from '@expo/vector-icons';

export default function CadastroUsuario() {

  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {

        if(name === '' || login === '' || password === ''){

            Alert.alert('Preencha todos os campos!');

        }else{

            Alert.alert('Usuário cadastrado com sucesso!');
        }

  }

  useEffect(() => {
    
  }, []);

  return (

    <KeyboardAvoidingView style={styles.container}>

       <TouchableOpacity style={styles.btnImg}>
            
       </TouchableOpacity>

       <Text style={styles.label} >Nome</Text>

       <TextInput style={styles.inputs} value={name} onChangeText={(text) => setName(text)}
       placeholder='Informe seu nome e o primeiro sobrenome' />

        <Text style={styles.label} >E-mail</Text>

       <TextInput style={styles.inputs} value={login} onChangeText={(text) => setLogin(text)}
        placeholder='Informe um e-mail válido!' />

        <Text style={styles.label} >Senha</Text>

       <TextInput style={styles.inputs} value={password} onChangeText={(text) => setPassword(text)}
        placeholder='Cadastre um senha' />

       <TouchableOpacity style={styles.btnEntrar} onPress={() => register()}>
            <Text style={styles.textEntrar}>CADASTRAR</Text>
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
    marginBottom: 25,
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
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#B5FF01',
    marginBottom: 70
  },
  label: {
    color: '#fff',
    alignSelf: 'flex-start',
    marginLeft: '3%',
    fontSize: 16,
    marginBottom: 5
  }
});