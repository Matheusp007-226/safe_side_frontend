import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function AnexosImage(){

    let img = [1,2,3,4,5,6];

    return(
             <View style={styles.container}>

                <View style={styles.containerInterno}>
                    <Image source={require("../../img/image-carro3.jpeg")} style={styles.imagem} />
                    <Image source={require("../../img/image-carro3.jpeg")} style={styles.imagem} />
                </View>
                
                <View style={styles.containerInterno}>
                    <Image source={require("../../img/image-carro3.jpeg")} style={styles.imagem} />
                    <Image source={require("../../img/image-carro3.jpeg")} style={styles.imagem} />
                </View>

                <View style={styles.containerInterno}>
                    <Image source={require("../../img/image-carro3.jpeg")} style={styles.imagem} />
                    <Image source={require("../../img/image-carro3.jpeg")} style={styles.imagem} />
                </View>

                <View style={styles.containerInterno}>
                    <Image source={require("../../img/image-carro3.jpeg")} style={styles.imagem} />
                    <Image source={require("../../img/image-carro3.jpeg")} style={styles.imagem} />
                </View>

                    
             </View>

    )
}

const styles = StyleSheet.create({

   container:{
        width: '100%',
        padding: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
   },
   containerInterno:{
        display: 'flex',
        height: 100,
        flexDirection: 'row',
        marginBottom: 10
   },
   imagem:{
    width: '50%',
    height: '100%',
    margin: 5
   }
});