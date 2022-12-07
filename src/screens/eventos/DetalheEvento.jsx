import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { StyleSheet,View,TouchableOpacity, Text, ScrollView} from 'react-native';
import Comentarios from '../../components/Comentarios';
import CabecalhoDetalheEvento from '../../components/modal/CabecalhoDetalheEvento';
import AnexosImage from '../../components/modal/AnexosImage';
import Context from '../../components/context';
import ModalComentarios from '../../components/ModalComentarios';
import { Dialog, Portal, TextInput, Button } from 'react-native-paper';

export default function DetalheEvento({route}) {

  const [eventos, setEventos, usuarios, setUsuarios, usuarioLogado, setUsuarioLogado, comentarios, setComentarios] = useContext(Context);
  const [evento, setEvento] = useState({
    id: '',
    categoria: '',
    nomeUsuario: '', 
    endereco: '',
    descricao: '',
    data: '',
    hora: '',
    risco: '',
    latitude: 0,
    longitude: 0
});

  const [coment, setComent] = useState();
  const [visible, setVisible] = React.useState(false);
  const [text, setText] = React.useState("");

  const hideDialog = () => setVisible(!visible);

  const salvarComentario = () =>{

        let newComent = {
          id: eventos.length + 1,
          idEvento: route.params.idEvento,
          idUsuario: usuarioLogado.id,
          descricao: text, 
          data: '17/12/2022',
          hora: '01:45'
        }

        setVisible(!visible);
        setText('');
        setComentarios([...comentarios, newComent]);
        setComent([...coment, newComent]);
  }

  useEffect(() => {
    
      if(route.params.idEvento){
            setComent(comentarios.filter(item => {
              console.log(item)
             return item.idEvento === route.params.idEvento}));
            setEvento(...eventos.filter(item => item.id === route.params.idEvento));

            console.log(route.params.idEvento)
            console.log(coment)
            console.log(usuarioLogado)
            console.log(evento)
      }

  }, []);

  return (

    <ScrollView>

        <View style={styles.container}>

          <CabecalhoDetalheEvento
              tipo={evento.categoria}
              local={evento.endereco} 
              status={evento.risco} 
              data={evento.data}
              hora={evento.hora}
              estrelas={2}
          />

                <View style={styles.descricaoDetalhada}>
                    <Text style={styles.textDescDetalhe}>{evento.descricao}</Text>
                </View>

                <Text style={styles.titulos}>Comentários/ Avaliações</Text>

                {
                  coment ? coment.map(item => <Comentarios key={item.id} id={item.id} style={styles.comentarios} descricao={item.descricao} idUsuario={item.idUsuario} idUsuarioLogado={usuarioLogado.id} />) : ''
                }

                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.btn} onPress={() => setVisible(!visible)}>
                        <Text style={styles.textComentario}>Comentar</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.titulos}>Anexos:</Text>

                <AnexosImage />

                <Portal>
                 <Dialog visible={visible} onDismiss={hideDialog}>
                  <Dialog.ScrollArea>
                    <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
                      <TextInput
                        label="Comentário"
                        multiline={true}
                        numberOfLines={8}
                        value={text}
                        onChangeText={text => setText(text)}
                      />
                    </ScrollView>
                    <TouchableOpacity style={styles.btnSalvarComent} onPress={() => salvarComentario()}>
                        <Text style={styles.textSalvarComent}>salvar</Text>
                    </TouchableOpacity>

                  </Dialog.ScrollArea>
                </Dialog>
              </Portal>

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
  btnSalvarComent:{
    padding: 10,
    backgroundColor: '#D9D9D9',
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 7
  },
  textSalvarComent:{
    fontSize: 17,
    textAlign: 'center'
  }
});