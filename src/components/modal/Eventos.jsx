import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome, AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Eventos({id,categoria, nomeUsuario, endereco, data, hora}){

    const navigation = useNavigation();

    const editarEvento = () => {
            navigation.navigate('CadastrarEvento', {idEvento: id});
    }

    const detalheEvento = () =>{

            navigation.navigate('DetalheEvento', {idEvento: id});
    }

    return(
        <TouchableOpacity style={styles.container} onPress={() => {detalheEvento()}}>
                <View style={styles.containerTitulo}>
                    <Text style={styles.textLabelTitulo}>{categoria}</Text>
                    <View style={styles.containerIconesForm}>

                        <TouchableOpacity onPress={() => editarEvento()} >
                            <FontAwesome name="edit" size={24} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <AntDesign name="delete" size={24} color="white" />
                        </TouchableOpacity>
                        
                    </View>
                </View>
                <Text style={styles.textLabel}>{nomeUsuario}</Text>
                <Text style={styles.textLabel}>{endereco}</Text>
                <View style={styles.containerDataHora}>
                    <View style={styles.containerInternoDataHora}>
                        <Text style={styles.textLabel}>{data}</Text>
                        <MaterialIcons name="date-range" size={24} color="white" />
                    </View>
                    <View style={styles.containerInternoDataHora}>
                        <Text style={styles.textLabel}>{hora}</Text>
                        <Ionicons name="ios-time-outline" size={24} color="white" />
                    </View>

                </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 150,
      backgroundColor: '#000',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      borderRadius: 15,
      padding: 20,
      marginBottom: 15
    },
    textLabel:{
        color: '#fff',
        fontSize: 16,
        textAlign: 'left',
        marginBottom: 8
    },
    textLabelTitulo:{
        color: '#fff',
        fontSize: 18,
        textAlign: 'left',
        marginBottom: 8
    },
    containerDataHora:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300
    },
    containerInternoDataHora:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 140
    },
    containerTitulo:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300
    },
    containerIconesForm:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 80
    }
  });