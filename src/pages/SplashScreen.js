import React from 'react'
import styled from 'styled-components/native'
import {  ActivityIndicator , StatusBar } from 'react-native';
import { connect } from 'react-redux'
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

import Imagens from '../Constants/Imagens';

import * as Firebase from 'firebase'



class SplashScreen extends React.Component {

    state = {
        LoginVerificado: false
    }

    componentWillMount(){
        Firebase.auth().onAuthStateChanged( user => {
            if(user){
            this.props.atualizarUsuario(user);
            }
          })
    }

    _CarregarRecursos = async () => {
        await Promise.all([
            Asset.loadAsync(Imagens),
            Font.loadAsync({
              ...Ionicons.font,
              'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
            }),
          ]);
    }

    _onError = async (err) => {
        console.warn(err)
    }

    _RecursosCarregados = () =>{
        
        this.props.setPronto(true)
    }

    render() {
        return (
            <Background source={require('../../assets/Images/skyBack.png')}>
                <StatusBar barStyle='light-content' />
           <ActivityIndicator size='large' color='rgba(255,255,255,0.3)'/>
           <AppLoading
                startAsync={this._CarregarRecursos}
                onError={this._onError}
                onFinish={this._RecursosCarregados}
                autoHideSplash={true}
                />
                <Logo>
                    <Titulo>Bringher</Titulo>
                    <Subtitulo>Bring anything from anywhere.</Subtitulo>
                </Logo>
            </Background>
        )
    }
}

const mapActionsToProps = dispatch => ({
    atualizarUsuario:  usuario => dispatch({type: 'ATUALIZAR_USUARIO', payload: usuario})
})
export default connect(null,mapActionsToProps)(SplashScreen);


const Background = styled.ImageBackground`
flex:1;
justify-content:center;
align-items:center;
`
const Logo = styled.View`
align-items:center;
`
const Titulo = styled.Text`
color:#f0f3f5;
font-size: 40px;
font-weight:600;
`
const Subtitulo = styled.Text`
color:#f0f3f5;
font-weight:600;
opacity:0.7;
`

