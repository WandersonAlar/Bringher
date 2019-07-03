import React from 'react';
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux';
import * as Fireabse from 'firebase'

import Store from './store'

import AppNavigator from './src/navigation/Main';
import SplashScreen from './src/pages/SplashScreen';
import NavigationService from './NavigationService'

var firebaseConfig = {
  apiKey: "AIzaSyDzM78B0RKjKiCftiRmZhhR6-eoaJ89Wek",
  authDomain: "bringher-9576f.firebaseapp.com",
  databaseURL: "https://bringher-9576f.firebaseio.com",
  projectId: "bringher-9576f",
  storageBucket: "bringher-9576f.appspot.com",
  appId: "1:420752997481:web:abc1db158525e42a"
};

Fireabse.initializeApp(firebaseConfig);


export default class App extends React.Component {
  state = {
    Pronto: false
  }
  setPronto = valor => {
    this.setState({Pronto : valor})
  }

  render() {
    return <>
    <StatusBar backgroundColor={'transparent'} translucent={true} barStyle='light-content' />
    <Provider store={Store}>
    {!this.state.Pronto ? 
    <SplashScreen setPronto={this.setPronto} /> :
    <AppNavigator  ref={navigatorRef => {
      NavigationService.setTopLevelNavigator(navigatorRef);
    }}
    />
    }
    
    </Provider>
    </>
  }
}

