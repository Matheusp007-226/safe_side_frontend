import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { StyleSheet,KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Alert, View} from 'react-native';
import { Entypo, FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons';
import Context from '../components/context';

export default function CadastroUsuario() {

  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const [eventos, setEventos, usuarios, setUsuarios, usuarioLogado, setUsuarioLogado] = useContext(Context);

  const register = () => {

        if(name === '' || login === '' || password === ''){

            Alert.alert('Preencha todos os campos!');

        }else{

            let newUser = {
                email: login,
                id: usuarios.length + 1,
                nomeUsuario: name,
                senha: password
            };

            setUsuarios([...usuarios, newUser]);

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

       <View style={styles.containerInputs}>
       
                <Feather name="user" size={24} color="black" />

                <TextInput style={styles.inputs} value={name} onChangeText={(text) => setName(text)}
                placeholder='Informe seu nome!' />
       </View>

        <Text style={styles.label} >E-mail</Text>

        <View style={styles.containerInputs}>

                <MaterialIcons name="email" size={24} color="black" />

                <TextInput style={styles.inputs} value={login} onChangeText={(text) => setLogin(text)}
                placeholder='Informe um e-mail válido!' />
       </View>

        <Text style={styles.label} >Senha</Text>

        <View style={styles.containerInputs}>
            <TouchableOpacity style={styles.btnEye} onPress={() => setShowPassword(!showPassword)}>

                {
                    showPassword ? <Entypo  name="eye" size={24} color="black" /> : <FontAwesome name="eye-slash" size={24} color="black" />
                }
                
            </TouchableOpacity>
            <TextInput secureTextEntry={showPassword} style={styles.inputs} value={password} onChangeText={(text) => setPassword(text)}
                    placeholder='Cadastre um senha' />
       </View>

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
    width: '90%',
    height: '100%',
    backgroundColor: '#FFF', 
    fontSize: 18,
    padding: 10,
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
    marginBottom: 40
  },
  label: {
    color: '#fff',
    alignSelf: 'flex-start',
    marginLeft: '3%',
    fontSize: 16,
    marginBottom: 5
  },
  containerInputs:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 55,
    width: '95%',
    marginBottom: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btnEye:{
    width: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});