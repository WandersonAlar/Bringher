import React from 'react';
import styled from 'styled-components/native'
import { Icon } from 'expo';
import { Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

const tipoInput = tipo => {
    switch (tipo) {
        case 'numero':
            return 'default'
        case 'email':
            return 'email-address'
        case 'telefone':
            return 'phone-pad'
        default:
           return 'default'
    }
}


const Campo = ({ placeholder, onChangeText, icone, tipo, nome, setState }) => (
    <Container>
        {icone &&
            <Icon.Ionicons
                name={`ios-${icone}`}
                size={28}
                color='rgba(255,255,255,0.3)'
                style={{
                    position: 'absolute',
                    top: 6,
                    left: 15
                }}
            />
        }

        <Input icone={!!icone} placeholder={placeholder} keyboardType={tipoInput(tipo)} secureTextEntry={tipo === 'senha'} onChangeText={texto => !!setState ?  setState({[nome]: texto }) : onChangeText({texto, nome})} />
    </Container>
)

export default Campo;



const Container = styled.View`
margin-top: 8px;
`

const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255,0.7)',
    underlineColorAndroid: 'transparent',
    autoCompleteType: 'off',
    autoCapitalize: 'none'
})`
width:${WIDTH - 55};
height:45px;
font-size:16px;
color:rgba(255,255,255,0.7);
padding-left: ${props => props.icone ? '45px': '15px'};
border-radius: 5px; 
background-color: rgba(255,255,255,0.3)
`
