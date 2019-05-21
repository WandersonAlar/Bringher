import { createStore, applyMiddleware } from 'redux'
import rootReducers from './src/reducers'
import Thunk from 'redux-thunk'

export default configure = () => createStore(rootReducers,applyMiddleware(Thunk))

