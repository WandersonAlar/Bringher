import React, { Component } from 'react';
import { TouchableOpacity, StatusBar } from 'react-native'
import styled from 'styled-components/native'
import Container from '../components/Container'
import { Icon } from 'expo'


class DetalheScreen extends Component {
    render() {
        const { goBack, getParam } = this.props.navigation
        const ProdutoDetalhe = getParam('Produto')
        return (
            <Container>
                <StatusBar hidden />
                <Produto>
                    <Imagem source={{ uri: ProdutoDetalhe.imagem || '' }} />
                    <Titulo>{ProdutoDetalhe.Titulo || ''}</Titulo>
                </Produto>
                <TouchableOpacity onPress={() => goBack()} style={{ position: 'absolute', top: 20, right: 20 }}>
                    <Fechar>
                        <Icon.Ionicons name='ios-close' size={32} color='#546bfb' style={{ marginTop: -2.5 }} />
                    </Fechar>
                </TouchableOpacity>
                <Detalhe>
                    <Descricao>
                        {ProdutoDetalhe.Descricao || ''}
                    </Descricao>
                </Detalhe>
                <Informacoes>
                    <Item>
                        <Legenda>Valor</Legenda>
                        <Valor>{ProdutoDetalhe.Valor}</Valor>
                    </Item>
                    <Item>
                        <Legenda>Chegar em até</Legenda>
                        <Valor>{ProdutoDetalhe.chegarEm} dias</Valor>
                    </Item>
                    <Item>
                        <Legenda>Entrega  em</Legenda>
                        <Valor>{ProdutoDetalhe.Entrega}</Valor>
                    </Item>
                </Informacoes>
            </Container>
        )
    }
}

export default DetalheScreen;

const Produto = styled.View`
height:375px;
`
const Imagem = styled.Image`
width:100%;
height:100%;
position:absolute;
`
const Titulo = styled.Text`
color: #ffe;
font-weight:bold;
font-size:24px;
margin-top:15px;
margin-left:20px;
width: 170px;
`
const Fechar = styled.View`
width:44px;
height:44px;
border-radius: 22px;
background:white;
justify-content:center;
align-items:center;
`
const Descricao = styled.Text`
`
const Detalhe = styled.View`
background:#fff;
padding:5px;
flex:1;
box-shadow: 5px 0 10px rgba(0,0,0,0.15);
`

const Informacoes = styled.View`
margin-top:5px;
padding-bottom:5px;
justify-content:center;
flex-direction:row;
`

const Item = styled.View`
margin-right:20px;
`

const Legenda = styled.Text`
font-size:12px;
color:#b8bece;
`
const Valor = styled.Text``