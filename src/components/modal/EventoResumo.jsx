import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function EventoResumo({freq, status, endereco, estrelas}){

    let star_array = [0,0,0,0,0];

    let star_transformado = star_array.map((item, index) => {

        if(index < estrelas){
            return 1;
        }else{
            return 0;
        }
    });

    return(
        <View style={styles.container}>
                <Text style={styles.textLabelTitulo}>Frequência: {freq}</Text>
                <Text style={styles.textLabel}>Status: {status}</Text>
                <Text style={styles.textLabel}>Endereço: {endereco}</Text>
                <Text style={styles.textLabel}>Avaliação: {estrelas}</Text>
                <View style={styles.containerStar}>
                    {
                       
                       star_transformado.map((item, key) => 
                            (item === 1)
                            ?
                                <MaterialCommunityIcons key={key} style={styles.iconStar} name="star" size={26} color="#FFD700" />
                            :
                                <MaterialCommunityIcons key={key} style={styles.iconStar} name="star" size={26} color="#fff" />

                       )
                        
                    }
                    
                    
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '85%',
      height: 180,
      backgroundColor: '#000',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      borderRadius: 15,
      padding: 20
    },
    textLabelTitulo:{
        color: '#fff',
        fontSize: 18,
        textAlign: 'left',
        marginBottom: 5
    },
    textLabel:{
        color: '#fff',
        fontSize: 16,
        textAlign: 'left',
        marginBottom: 3
    },
    containerStar:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    iconStar:{
        marginRight: 26
    }
  });