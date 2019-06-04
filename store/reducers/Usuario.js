
import { TYPES } from '../../actions/Usuario'

const init = {
    Carregando: false,
    Erro: false
}

export default Usuario = (state = init, {type, payload} ) => {
switch (type) {
    case TYPES.SET_USUARIO:
    return {...state,Dados : payload,}
    default:
       return state;
}
}