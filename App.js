import React from 'react';
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/Main';
import * as Fireabse from 'firebase'

import Store from './store'


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
  render() {
    return <>
    <StatusBar backgroundColor={'transparent'} translucent={true} barStyle='dark-content' />
    <Provider store={Store}>
    <AppNavigator />
    </Provider>
    </>
  }
}

