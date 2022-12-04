
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CabecalhoDetalheEvento({tipo, status, local, data, hora, estrelas}){

    const navigation = useNavigation();

    const navegaDetalheEvento = () => navigation.navigate('DetalheEvento');

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
                <Text style={styles.textLabelTitulo}>{tipo}</Text>
                <Text style={styles.textLabel}>{status}</Text>
                <Text style={styles.textLabel}>{local}</Text>
                <View style={styles.containerData}>
                    <Text style={styles.textLabel}>{data}</Text>
                    <Text style={styles.textLabel}>{hora}</Text>
                </View>
                <View style={styles.containerStar}>
                    {
                       
                       star_transformado.map((item) => 
                            (item === 1)
                            ?
                                <MaterialCommunityIcons style={styles.iconStar} name="star" size={26} color="#FFD700" />
                            :
                                <MaterialCommunityIcons style={styles.iconStar} name="star" size={26} color="#fff" />

                       )
                        
                    }
                    
                    
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 180,
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderRadius: 15,
        padding: 20,
        marginLeft: 'auto',
        marginRight: 'auto'
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
      },
      containerData:{
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginTop: 5
      }
  });