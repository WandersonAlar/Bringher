import React from 'react';
import { Image } from 'react-native'
import { Imagens } from '../constants/Imagens'
import Bloco  from './Bloco';

export default class SplashLogo extends React.Component {

  render() {
    return (
      <Bloco centro meio>
        <Image style={{width:40, height:40}}  source={Imagens.Icon}/> 
      </Bloco>
    );
  }
}

