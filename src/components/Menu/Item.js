import React from 'react';
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'expo';

const ItemMenu = props => (
    <Container onPress={props.onPress}>
        <Icone>
            <Icon.Ionicons name={props.icone} size={24} color='#546bfb' />
        </Icone>
        <Conteudo>
            <Titulo>{props.titulo}</Titulo>
            <Texto>{props.texto}</Texto>
        </Conteudo>
    </Container>
)

export default ItemMenu;

const Container = styled.TouchableOpacity`
flex-direction: row;
margin: 15px 0;
`
const Icone = styled.View`
width: 32px;
height: 32px;
justify-content:center;
align-items:center;
`
const Conteudo = styled.View`
padding-left: 20px;
`
const Titulo = styled.Text`
color:#3c4560;
font-size: 24px;
font-weight:600;
`
const Texto = styled.Text`
color:#3c4560;
font-weight:600;
opacity:0.6;
margin-top: 5px;
`