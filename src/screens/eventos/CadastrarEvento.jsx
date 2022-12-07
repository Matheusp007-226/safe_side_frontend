import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { StyleSheet,View,TouchableOpacity, Text, TextInput, Button, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'expo-image-picker';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Context from '../../components/context';
import FabButton from '../../components/FabButton';
import {dataAtual, tempoAtual } from '../../utilitarios/dateAndTime';

export default function ListaEventos({route}) {
    
    // let dataAtual = new Date();
    // dataAtual = dataAtual.getDate() + "/" + (dataAtual.getMonth() + 1) + "/" + dataAtual.getFullYear();

    const [eventos, setEventos, usuarios, setUsuarios, usuarioLogado, setUsuarioLogado, comentarios, setComentarios, resumoEventos, setResumoEventos] = useContext(Context);

    const { coordenadas, idEvento} = route.params;
    const [textoArea, setTextoArea] = useState('');
    const [date, setDate] = useState(dataAtual);
    const [time, setTime] = useState('');
    const [image, setImage] = useState(null);

    const [open, setOpen] = useState(false);
    const [categoria, setCategoria] = useState();
    const [items, setItems] = useState([
      {label: 'Tiroteio', value: 'Tiroteio'},
      {label: 'Incêndio', value: 'Incêndio'},
      {label: 'Violência', value: 'Violência'},
      {label: 'Desastres naturais', value: 'Desastes naturais'}
    ]);

    const [openRisco, setOpenRisco] = useState(false);
    const [nivelRisco, setNivelRisco] = useState();
    const [itemsRisco, setItemsRisco] = useState([
      {label: 'Baixo', value: 'Baixo'},
      {label: 'Médio', value: 'Médio'},
      {label: 'Alto', value: 'Alto'},
      {label: 'Extremo', value: 'Extremo'}
    ]); 

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.uri);
        }
      };

      const cadastrarEvento = () => {

          let data_atual = dataAtual();
          let tempo_atual = tempoAtual();

          let event =  {
            id: eventos.length + 1,
            categoria: categoria,
            nomeUsuario: 'Matheus Pimentel', 
            endereco: coordenadas.endereco,
            descricao: textoArea,
            data: data_atual,
            hora: tempo_atual,
            risco: nivelRisco,
            latitude: coordenadas.latitude,
            longitude: coordenadas.longitude
      }

      console.log('new event')
      console.log(event)

      console.log(resumoEventos)
          let quantidade = resumoEventos.qtd + 1;
          console.log('quantidade: ', quantidade)
          setResumoEventos({qtd: quantidade, endereco: resumoEventos.endereco});

          setEventos([...eventos, event]);
          alert("Evento cadastrado com sucesso!");
          console.log(eventos);
          console.log(resumoEventos)
      }

  useEffect(() => {

        setTime(tempoAtual());

        if(idEvento){

            let evento = eventos.filter( item => item.id === idEvento);
            console.log(evento)
            setCategoria(evento[0].categoria);
            setTextoArea(evento[0].descricao);
            setNivelRisco(evento[0].risco);
            setDate(evento[0].data);
            setTime(evento[0].hora);
        }

        //console.log(coordenadas);
    
  }, []);

  return (

    <View style={styles.container}>

        <MaterialIcons name="event-note" size={170} color="black" />

        <DropDownPicker
            open={openRisco}
            value={nivelRisco}
            items={itemsRisco}
            setOpen={setOpenRisco}
            setValue={setNivelRisco}
            setItems={setItemsRisco}
            containerStyle={{
                width: '80%'
            }}
            placeholder='Selecione o nível de risco...'
        />

        <DropDownPicker
            open={open}
            value={categoria}
            items={items}
            setOpen={setOpen}
            setValue={setCategoria}
            setItems={setItems}
            containerStyle={{
                width: '80%',
                marginTop: 10,
                zIndex: 10
            }}
            placeholder='Selecione a categoria...'
        />

        <View style={styles.dateAndTimeContainer}>
            <TouchableOpacity style={styles.btnDate}>
                <Text>{date ?? dataAtual}</Text>
                <AntDesign name="calendar" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnTime}>
                <Text>{time ?? tempoAtual()}</Text>
                <Ionicons name="time-outline" size={24} color="black" />
            </TouchableOpacity>
        </View>

        <TextInput multiline={true} numberOfLines={7} textAlignVertical="top" style={styles.textArea} value={textoArea} placeholder="Descreva o evento..." onChangeText={(text) => { console.log(text); setTextoArea(text)}} />

        <View style={styles.imgContainer}>
            {!image && 
            <View style={styles.conteinerTextoAnexos}>
                    <Entypo name="attachment" size={24} color="black" />
                    <Text style={styles.textoAnexos}>Anexos</Text>
            </View>
            
            }
            <TouchableOpacity onPress={pickImage} style={styles.btnUpload}>
                <Entypo name="upload" size={24} color="black" />
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={{ width: 150, height: 150 }} />}
        </View>

        <TouchableOpacity style={styles.btnCadastrar} onPress={() => {cadastrarEvento()}} >
                <Text style={styles.textCadastrar}>CADASTRAR EVENTO</Text>
        </TouchableOpacity>

    </View>
   
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  btn:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  dateAndTimeContainer:{
    display: 'flex',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btnTime:{
    width: '35%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 10,
    marginTop: 20
  },
  btnDate:{
    width: '55%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 10,
    marginTop: 20
  },
  textArea:{
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10
  },
  btnCadastrar:{
    width: '80%',
    backgroundColor: '#B5FF01',
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10
  },
  imgContainer:{
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10
  },
  btnUpload:{
    width: '20%',
    height: 60,
    borderRadius: 30,
    padding: 10,
    backgroundColor: '#D9D9D9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoAnexos:{
    fontSize: 22,
    fontWeight: 'bold'
  },
  conteinerTextoAnexos:{
    display: 'flex',
    flexDirection: 'row'
  },
  textCadastrar:{
    fontWeight: 'bold',
    fontSize: 16
  }
});