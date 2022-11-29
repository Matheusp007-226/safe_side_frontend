import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet,View,TouchableOpacity, Text, FlatList} from 'react-native';


export default function Comentarios(props) {

  return (

    <View style={styles.container}>
        <Text style={styles.textComentario}> {props.descricao} </Text>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textComentario:{
    fontSize: 22,
    color: '#000',
    flex: 1,
    height: 100,
    borderWidth: 2,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  }
});