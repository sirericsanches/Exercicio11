import { ADD_CONTATO } from "./contatos-actions";
import Contato from '../model/Contato'

const estadoInicial = {
    contatos: []
};

export default (estado = estadoInicial, action) =>{
    switch (action.type){
        case ADD_CONTATO:
            const c = new Contato(new Date().toString(), 
            action.dadosContato.nomeContato, 
            action.dadosContato.imagem,
            action.dadosContato.telefoneContato);
            
            return {
                contatos: estado.contatos.concat(c)
                
            }
        default:
            return estado;
    }
}