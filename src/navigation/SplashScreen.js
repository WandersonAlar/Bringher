import React from 'react';
import { AsyncStorage } from 'react-native'
import { SplashLogo } from '../components';


export default class SplashScreen extends React.Component {

  componentDidMount(){

    this.verificarAuth()
  }
  verificarAuth = async () =>{
    const { navigation } = this.props;
    if(await AsyncStorage.getItem('auth')) 
        navigation.navigate('Main')
     else
        navigation.navigate('Login')
  }

  render() {
    return <SplashLogo />
  }
}

