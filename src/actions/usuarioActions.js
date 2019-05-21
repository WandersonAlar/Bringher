import Axios from 'axios';
import { AsyncStorage } from 'react-native'
import { sucesso, falha, action } from './'
import { BASE } from '../constants/urls';

const token = AsyncStorage.getItem('_token');

const usuarioApi = Axios.create({
    baseURL: BASE,
    auth:token
})


export const types = {
    LOGIN:'[usuario] LOGIN'
}

const fazerLogin = ({email,senha}) => dispatch => {
   
    dispatch(action(types.LOGIN))
    usuarioApi.post('AppAuth',{ email, senha })
    .then(({data}) => dispatch(action(sucesso(types.LOGIN),data)))
    .catch(err => dispatch(action(falha(types.LOGIN),err)))
}


export const ACTIONS = {
    fazerLogin
}