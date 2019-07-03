import { createStore } from 'redux';



const InitialState = {
    MenuOpen:false,
    Usuario: null
}

const reducer = (state= InitialState, { type, payload}) => {
    switch(type){
        case 'FECHAR_MENU': 
        return { ...state, MenuOpen: false }
        case 'ABRIR_MENU': 
        return {  ...state, MenuOpen: true }
        case 'ATUALIZAR_USUARIO': 
        return {...state, Usuario: payload}
        default:
        return state;
    }
}

const Store = createStore(reducer);

export default Store;
