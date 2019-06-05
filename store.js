import { createStore } from 'redux';


const InitialState = {
    MenuOpen:false
}

const reducer = (state= InitialState, { type, payload}) => {
    switch(type){
        case 'FECHAR_MENU': 
        return { MenuOpen: false }
        case 'ABRIR_MENU': 
        return { MenuOpen: true }
        default:
        return state;
    }
}

const Store = createStore(reducer);

export default Store;
