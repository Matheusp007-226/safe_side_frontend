import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet,View,TouchableOpacity, Text, FlatList} from 'react-native';
import Comentarios from '../../components/Comentarios';

export default function DetalheEvento() {
  
  const comentarios_base = [
    {   
        id: '1',
        idEvento: 2,
        idUsuario: 2,
        descricao: 'Um amigo de um privo viu e contou sua versão do ocorrido, ele disse que...!', 
        data: '10/06/2022',
        hora: '19:30'
    },
    {
        id: '2',
        idEvento: 2,
        idUsuario: 3,
        descricao: 'Estava passando por perto e presenciei o ato, 100% verdade!', 
        data: '05/10/2021',
        hora: '07:36'
    },
    {
        id: '3',
        idEvento: 2,
        idUsuario: 6,
        descricao: 'Na minha ótica foi um pouco diferente, na minha opinião 80% do que vc falou é verdade, os outros 20% é o seguinte...!', 
        data: '25/08/2022',
        hora: '20:40'
    }
  ];

  const [comentarios, setComentarios] = useState(comentarios_base);

  useEffect(() => {
    
  }, []);

  return (

    <View style={styles.container}>

       {/* <EventoResumo 
        freq="Levemente habitual" 
        status="Perigo moderado" 
        endereco="Pernambués, Salvador - BA"
        estrelas={3}
       /> */}

            <FlatList 
                data={comentarios}
                keyExtractor={item => { return item.id}}
                renderItem={({item}) =>     
                    <View style={styles.containerInterno}> 
                            <Comentarios descricao={item.descricao} />
                    </View>
                }
            />

            <TouchableOpacity style={styles.conteinerBtn}>
                <Text style={styles.textComentario}>Comentar</Text>
            </TouchableOpacity>

            <Text style={styles.tituloAnexos}>Anexos:</Text>
        </View>
   
  );
}

const styles = StyleSheet.create({
  containerInterno: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  conteinerBtn:{
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#D3D3D3',
    width: '40%'
  },
  textComentario:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }, 
  tituloAnexos:{
    fontSize: 24,
    fontWeight: 'bold'
  }
});