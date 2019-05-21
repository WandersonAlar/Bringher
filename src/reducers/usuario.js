import { sucesso, falha } from '../actions'
import { types } from '../actions/usuarioActions'

const init = {
    Carregando: false,
    Erro: false
}

export default Usuario = (state = init, {type, payload} ) => {
switch (type) {
    case types.LOGIN:
        return {...state, Carregando: true, Erro: false}
    case sucesso(types.LOGIN):
        return {...state, Carregando: false, ...payload}
    case falha(types.LOGIN):
        return {...state, Carregando: false, Erro: true}
    default:
       return state;
}
}