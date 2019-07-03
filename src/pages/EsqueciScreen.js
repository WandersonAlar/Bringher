import React from 'react'
import styled from 'styled-components/native'
import { Dimensions } from 'react-native';

import { connect } from 'react-redux';
import Campo from '../components/Campo'


const { width: WIDTH } = Dimensions.get('window')

class EsqueciScreen extends React.Component {
    static navigationOptions = {
        headerTintColor: '#fff',
        headerTransparent: true
    }
    state = {
        Carregando: false
    }
   
    Recuperar = () => {
        alert(`Foi enviado um email para ${this.state.email}`)
    }

    handleChange = ({nome,texto}) => {
        this.setState({[nome]:texto})
    }

    render() {
        return (
            <Background source={require('../../assets/Images/skyBack.png')}>
                <Campos>
                <Campo icone='at' nome='email' placeholder='Email' tipo='email' setState={this.handleChange}/>
             
                </Campos>
                <Botao onPress={this.Recuperar}>
                    <TextoBotao>Recuperar</TextoBotao>
                </Botao>
            </Background>
        )
    }
}



export default connect()(EsqueciScreen);


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