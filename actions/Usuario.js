export const TYPES = {
    SET_USUARIO: 'SET_USUARIO'
}
const setUserInfo = usuario => dispatch => {
    dispatch({ type: TYPES.SET_USUARIO, payload: usuario})
}
export const ACTIONS = {
    setUserInfo
}