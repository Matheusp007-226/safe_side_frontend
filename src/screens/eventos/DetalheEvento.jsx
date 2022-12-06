import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet,View,TouchableOpacity, Text, FlatList, ScrollView} from 'react-native';
import Comentarios from '../../components/Comentarios';
import CabecalhoDetalheEvento from '../../components/modal/CabecalhoDetalheEvento';
import AnexosImage from '../../components/modal/AnexosImage';

export default function DetalheEvento() {

  const evento = {
      id: 2,
      tipo: 'Acidente de trânsito',
      local: 'Rodoviária, Salvador - BA',
      status: 'Perigo baixo',
      data: '11/04/2022',
      hora: '22:48',
      estrela: 2,
      descDetalhe: 'Acidente que que dois carros colidiram frontalmente da rodovia x, um dos carros está completamente destruído.  Até entãi idêntificado 3 pessoas com ferimentos aparentemente leve e uma desacordada com vários ferimentos. Já foi contatado os primeiros socorros e a transsalvador. No momento possue 3 pesoas dando suporte e o local já foi devidamente sinalizado para evitar outros acidentes. O transito está muito congestionado.'
  }
  
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


    <ScrollView>

        <View style={styles.container}>

          <CabecalhoDetalheEvento
              tipo={evento.tipo}
              local={evento.local} 
              status={evento.status} 
              data={evento.data}
              hora={evento.hora}
              estrelas={2}
          />

                <View style={styles.descricaoDetalhada}>
                    <Text style={styles.textDescDetalhe}>{evento.descDetalhe}</Text>
                </View>

                <Text style={styles.titulos}>Comentários/ Avaliações</Text>

                {/* <FlatList 
                    data={comentarios}
                    keyExtractor={item => { return item.id}}
                    renderItem={({item}) =>     
                        
                                <Comentarios style={styles.comentarios} descricao={item.descricao} />

                    }
                /> */}

                {
                  comentarios.map(item => <Comentarios key={item.id} id={item.id} style={styles.comentarios} descricao={item.descricao} />)
                }

                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.textComentario}>Comentar</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.titulos}>Anexos:</Text>

                <AnexosImage />

            </View>

        </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  container:{
      flex: 1
  },
  containerInterno: {
    flex: 1,
    backgroundColor: 'red'
  },
  btn:{
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#D3D3D3',
    width: '40%'
  },
  textComentario:{
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold'
  }, 
  containerBtn:{
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 10,
    marginTop: 10
  },
  titulos:{
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10
  },
  descricaoDetalhada:{
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    margin: 10
  },
  textDescDetalhe:{
    fontSize: 17,
    textAlign: 'justify'
  },
  
});