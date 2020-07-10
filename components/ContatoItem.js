import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import Cores from '../constantes/cores'




const ContatoItem = (props) => {
    
  return (
        <TouchableOpacity onPress={props.onSelect} style={styles.contatoItem}>
            <Image
                style={styles.imagem}
                source={{uri: props.imagem}}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.nomeContato}>{props.nomeContato}</Text>
                <Text style={styles.telefone}>{props.telefoneContato}</Text>
                
            </View>
            

        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    contatoItem: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'lavender'
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#ccc',
        borderColor: Cores.primary,
        borderWidth: 1
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    nomeContato: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },
    telefone: {
        color: '#666',
        fontSize: 16
    }
});
export default ContatoItem;