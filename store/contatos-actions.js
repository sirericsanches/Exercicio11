export const ADD_CONTATO = 'ADD_CONTATO'

export const addContato = (nomeContato, imagem, telefoneContato) =>{
    return {
        type: ADD_CONTATO, dadosContato: {nomeContato: nomeContato, imagem: imagem, telefoneContato: telefoneContato}
    }
}