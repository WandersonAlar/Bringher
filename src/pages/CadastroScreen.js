import React from 'react'
import styled from 'styled-components/native'
import { Dimensions } from 'react-native';

import { connect } from 'react-redux';
import Campo from '../components/Campo'


const { width: WIDTH } = Dimensions.get('window')

class CadastroScreen extends React.Component {
    static navigationOptions = {
        headerTintColor: '#fff',
        headerTransparent: true
    }
    state = {
        Carregando: false
    }
   
    cadastrar = () => {
        console.log(this.state)
    }

    handleChange = ({nome,texto}) => {
        this.setState({[nome]:texto})
    }

    render() {
        return (
            <Background source={require('../../assets/Images/skyBack.png')}>
                <Campos>
                <Campo icone='at' nome='email' placeholder='Email' tipo='email' setState={this.handleChange}/>
                <Campo icone='person' nome='nome' placeholder='Nome completo' setState={this.handleChange}/>
                <Campo icone='phone-portrait' nome='celular' placeholder='Celular' tipo='telefone' setState={this.handleChange}/>
                <Campo icone='lock' nome='senha' password placeholder='Senha' tipo='senha' setState={this.handleChange}/>
                <Campo icone='lock' nome='repetirSenha' password placeholder='Confirmar senha' tipo='senha' setState={this.handleChange}/>
                </Campos>
                <Botao onPress={this.cadastrar}>
                    <TextoBotao>Cadastrar</TextoBotao>
                </Botao>
            </Background>
        )
    }
}

const Select = state => ({
    Usuario: state.Usuario
    });

export default connect(Select)(CadastroScreen);


const Background = styled.ImageBackground`
flex:1;
justify-content:center;
align-items:center;
`
const Campos = styled.KeyboardAvoidingView.attrs({
    behavior:'position', 
    enabled:true,
    keyboardVerticalOffset: WIDTH * 0.25
})``

const Botao = styled.TouchableOpacity`
margin-top: 8px;
margin-bottom: 8px;
width:${WIDTH - 55};
height:45px;
border-radius:5px;
background-color:#4775f2;
`
const TextoBotao = styled.Text`
text-align:center;
color:#f0f3f5;
font-weight:600;
font-size:17px;
margin-top: 10px;
`