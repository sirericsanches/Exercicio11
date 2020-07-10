import React, { useState } from 'react';
// import { View, StyleSheet, Text, Button, TextInput } from 'react-native';
import {StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView } from 'react-native';

import Cores from '../constantes/cores'

import { useDispatch } from 'react-redux';

import * as contatosActions from '../store/contatos-actions';

import TiraFoto from '../components/TiraFoto'
 
const NovoContatoTela = (props) => {

  const [imagemURI, setImagemURI] = useState();

  const[nome, setNome] = useState('');
  const[telefone, setTelefone] = useState('');
  const[contato, setContato] = useState([]);
  const[contatos, setContatos] = useState([]);
  const[contadorContatos, setContadorContatos] = useState(0);

  const dispatch = useDispatch();

  //captura o texto digitado
  const capturarNome = (nome) => {
    setNome(nome);
    setContato([nome, telefone]);
  };

  const capturarTelefone = (telefone) => {
    setTelefone(telefone);
    setContato([nome , telefone]);
  };

//ajuste na função que adiciona contatos
  const adicionarContato = () => {
    
    dispatch(contatosActions.addContato(contato[0], imagemURI, contato[1]));
    props.navigation.goBack();
    setContato([nome, telefone]);
    setContatos ((contatos) =>{
    setContadorContatos (contadorContatos + 1);
    return [{key: contadorContatos.toString(), value: contato}, ...contatos];}
    );
  }

  const fotoTirada = imagemURI => {
    setImagemURI(imagemURI);
  }

  return (
    <ScrollView style={estilos.scrollView}>
      <View style={estilos.form}>
          <Text style={estilos.titulo}>Novo Contato</Text>
          <Text>Nome: </Text><TextInput style={estilos.textInput} placeholder="Informe seu nome" 
                        onChangeText={capturarNome} values={nome}
                        ></TextInput> 
          <Text>Telefone: </Text><TextInput style={estilos.textInput} placeholder="Informe seu telefone"
                        onChangeText={capturarTelefone} value={telefone}
                        />

          <TiraFoto onFotoTirada={fotoTirada}/>
          
          <View style={estilos.botao}>
            <Button 
              title='Salvar Contato'
              color={Cores.primary}
              onPress={adicionarContato}
            />
            </View>
      </View>
    </ScrollView>
);

}

NovoContatoTela.navigationOptions = () => {
  return {
      headerTitle: 'Voltar',
  };
}

const estilos = StyleSheet.create({
    scrollView:{
      backgroundColor:'pink'
    },
    form:{
        margin: 50
    },
    titulo:{
        fontSize:18,
        marginBottom:15,
    },
    textInput:{
        borderBottomColor:'black',
        borderBottomWidth: 1,
        marginBottom: 15, 
        paddingVertical:4
    },
    botao:{
      alignItems:'center'
    }

});


export default NovoContatoTela;