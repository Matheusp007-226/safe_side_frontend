import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ModalListaEventos({local, qtdEventos, fecharModal}){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>

                <View style={styles.containerFechar}>
                    <TouchableOpacity style={styles.btnFechar} onPress={() => fecharModal(false)}>
                        <AntDesign name="close" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.textLabelLocal}>{local}</Text>
                <Text style={styles.textLabelQtdEventos}>Eventos: {qtdEventos}</Text>

                <TouchableOpacity style={styles.btnListaEventos} onPress={() => navigation.navigate('ListaEventos')}>
                    <Text style={styles.textLabelBtn}>Lista de eventos</Text>
                    <Feather name="list" size={24} color="#b5ff01" />
                </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '70%',
      height: 200,
      backgroundColor: '#d9d9d9',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      borderRadius: 15,
      padding: 20,
      marginBottom: 15,
      elevation: 3,
      zIndex: 10,
      position: 'absolute',
      right: ((Dimensions.get('window').width - (0.7*Dimensions.get('window').width)) / 2),
      bottom: 30,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    textLabelLocal:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10
    },
    textLabelQtdEventos:{
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    btnListaEventos:{
        backgroundColor: '#000',
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        width: 200,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 45,
        padding: 8
    },
    textLabelBtn:{
        color: '#b5ff01',
        fontSize: 16
    },
    containerFechar:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%'
    },
    btnFechar:{
        padding: 8
    }
  });