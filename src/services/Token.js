import Axios from 'axios';
import { BASE } from '../constants/urls'
const TokenApi = Axios.create({
    baseURL:BASE
})


export const getToken = async ({usuario,senha}) =>{
    const auth = { usuario, senha }
    return await TokenApi.post(`ApiAuth`,auth).catch(err => {});
}