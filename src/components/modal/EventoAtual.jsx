import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function EventoAtual({categoria, nomeUsuario, endereco, data, hora}){

    const navigation = useNavigation();

    const navegaDetalheEvento = () => navigation.navigate('DetalheEvento');

    return(
        <TouchableOpacity onPress={() => navegaDetalheEvento()}>
                <View style={styles.container}>

                    <View style={styles.containerInterno}>

                        <Text style={styles.textPrimary}> Acidente de carro à 200 km a frente!</Text>

                        <FontAwesome name="exclamation-triangle" size={40} color="white" />
                    </View>
                    
                    <Text style={styles.textSecond}>Sugiro que pegue alguma rota alternativa!</Text>

                </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 180,
      backgroundColor: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
      padding: 20,
      marginBottom: 15,
      marginTop: 40
    },
    containerInterno:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textPrimary:{
        fontSize: 22,
        color: '#fff'
    },
    textSecond:{
        color: "#fff",
        fontSize: 18,
        marginTop: 30
    }
  });