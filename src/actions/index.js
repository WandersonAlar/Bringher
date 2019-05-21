
export const action = (action,payload = null) => ({ type: `${action}`, payload: payload})
export const sucesso = action => `${action} => sucesso`;
export const falha = action => `${action} => falha`;
export const pendente = action => `${action} => pendente`