import React from 'react';
import { View, Text } from 'react-native';
import ContatosNavigator from './navegacao/ContatosNavigator';


import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'
import contatosReducer from './store/contatos-reducer';

const rootReducer = combineReducers({
  contatos: contatosReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {
  // console.log('')
  return (
    <Provider store={store}>
      <ContatosNavigator>
        
      </ContatosNavigator>
    </Provider>

  );
}


