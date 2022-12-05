import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet,View,TouchableOpacity, Text, TextInput, Button, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'expo-image-picker';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function ListaEventos({route}) {
    
    const dados = [
        {   
            id: '1',
            categoria: 'Incêndio',
            nomeUsuario: 'Matheus Pimentel', 
            endereco: 'Rua Arhur Azevedo, n 215, Pernambués',
            descricao: 'blablakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
            data: '10/06/2022',
            hora: '19:30'
        },
        {
            id: '2',
            categoria: 'Tiroteio',
            nomeUsuario: 'Anônimo', 
            endereco: 'Rua Arábia Saudita, n 159, Pernambués',
            descricao: 'ahahahahahahahahahahahahhaahahahahhahahahahahhahahahahah',
            data: '05/10/2021',
            hora: '07:36'
        },
        {
            id: '3',
            categoria: 'Acidente de trânsito',
            nomeUsuario: 'Bianca Souza', 
            endereco: 'Rua Barbosa Correia, n 59, Pernambués',
            descricao: 'fluflufluflfufiufufufufufufufufufufuufufufufufufufufuufufufufufuufufufufuf',
            data: '25/08/2022',
            hora: '20:40'
        }
      ];

    
    let dataAtual = new Date();
    dataAtual = dataAtual.getDate() + "/" + (dataAtual.getMonth() + 1) + "/" + dataAtual.getFullYear();

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

          let event =  {
            id: dados.length + 1,
            categoria: categoria,
            nomeUsuario: 'Matheus Pimentel', 
            endereco: coordenadas.endereco,
            descricao: textoArea,
            data: '25/08/2022',
            hora: '20:40'
      }
      
          dados.push(event);
          alert("Evento cadastrado com sucesso!");
          console.log(dados)
      }

  useEffect(() => {

        if(idEvento){

            let evento = dados.filter( item => item.id === idEvento);
            console.log(evento)
            setCategoria(evento[0].categoria);
            setTextoArea(evento[0].descricao);
            setDate(evento[0].data);
            setTime(evento[0].hora);
        }

        //console.log(coordenadas);
    
  }, []);

  return (

    <View style={styles.container}>

        <MaterialIcons name="event-note" size={200} color="black" />

        <DropDownPicker
            open={open}
            value={categoria}
            items={items}
            setOpen={setOpen}
            setValue={setCategoria}
            setItems={setItems}
            containerStyle={{
                width: '80%'
            }}
            placeholder='Selecione a categoria...'
        />


        <View style={styles.dateAndTimeContainer}>
            <TouchableOpacity style={styles.btnDate}>
                <Text>{date ?? dataAtual}</Text>
                <AntDesign name="calendar" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnTime}>
                <Text>{time}</Text>
                <Ionicons name="time-outline" size={24} color="black" />
            </TouchableOpacity>
        </View>

        <TextInput multiline={true} numberOfLines={7} textAlignVertical="top" style={styles.textArea}>
                {textoArea}
        </TextInput>

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