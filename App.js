import React from 'react';
import { AsyncStorage } from 'react-native'
import { SplashLogo } from './src/components'
import { cacheImages } from './src/utils/cache'
import { Imagens } from './src/constants/Imagens'
import AppNavigator from './src/navigation/AppNavigator';
import { getToken } from './src/services/Token'
import { Provider } from 'react-redux'
import ConfigureStore from './ConfigureStore'

const store = ConfigureStore();

export default class App extends React.Component {
  state = {
    Pronto: false
  }
  componentDidMount(){
    this.PrepararApp();
  }
  PrepararApp = async () =>{
    const Assets = cacheImages(Object.values(Imagens))
    await Promise.all([...Assets])   


    this.setState({ Pronto:true })
  }

  render() {
    const { Pronto } = this.state;
    return (!Pronto ? <SplashLogo /> : 
    <Provider store={store}>
    <AppNavigator />
    </Provider>);
  }
}

