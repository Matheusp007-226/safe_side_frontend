import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet,View,TouchableOpacity, Text, FlatList} from 'react-native';


export default function Comentarios(props) {

  return (
                                
    <View style={styles.container}>
          <View style={styles.containerFoto}>
                 <View style={styles.foto}></View>
                 <Text style={styles.usuario}>Matheus</Text>
          </View>
          <Text style={styles.textComentario}> {props.descricao} </Text>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10
  },
  textComentario:{
    fontSize: 17,
    color: '#000',
    width: '75%',
    height: 100,
    borderWidth: 1,
    textAlign: 'justify',
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  containerFoto:{
    width: '20%',
    height: 100,
    display: 'flex',
    justifyContent: 'center'
  },
  foto:{
    height: '80%',
    borderRadius: 40,
    backgroundColor: '#D9D9D9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  usuario: {
    textAlign: 'center'
  }
});