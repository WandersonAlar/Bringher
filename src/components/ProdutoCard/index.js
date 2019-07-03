import React from 'react';
import styled from 'styled-components/native'
const Card = props => {
    const imagem = `https://source.unsplash.com/featured/?eletronic,product&data=${new Date().getMilliseconds()}`
    
    return (
    <CardContainer style={{ elevation: 10}}>
        <Produto>
            <ImagemProduto source={{ uri:  imagem}} />
            <TituloProduto>{props.Titulo}</TituloProduto>
        </Produto>
        <Descricao>
            <Item>
                <Legenda>Valor</Legenda>
                <Valor>{props.Valor}</Valor>
            </Item>
            <Item>
                <Legenda>Chegar em até</Legenda>
                <Valor>{props.chegarEm} dias</Valor>
            </Item>
            <Item>
                <Legenda>Entrega  em</Legenda>
                <Valor>{props.Entrega}</Valor>
            </Item>
        </Descricao>
        <Acoes>
            <Acao onPress={()=>props.navigate('Detalhe',{Produto: {...props, imagem  } })} >Ver detalhes</Acao>
            <Acao>Editar</Acao>
        </Acoes>
    </CardContainer>
)}
export default Card;

const CardContainer = styled.View`
background:#fff;
width:94%;
height:280px;
border-radius:14px;
margin: 20px 10px;
margin-bottom:35px;
box-shadow: 0px 5px 14px rgba(0,0,0,0.15);
`
const Produto = styled.View`
overflow:hidden;
width:100%;
height:180px;
border-top-left-radius:14px;
border-top-right-radius:14px;
`

const Descricao = styled.View`
margin-top:5px;
justify-content:center;
flex-direction:row;
`

const ImagemProduto = styled.Image`
width:100%;
height:100%;
background:#b8bece;
position:absolute;
top:0;
left:0;
`

const TituloProduto = styled.Text`
color: #ffe;
font-weight:bold;
font-size:24px;
margin-top:15px;
margin-left:20px;
width: 170px;
`
const Item = styled.View`
margin-right:20px;
`

const Legenda = styled.Text`
font-size:12px;
color:#b8bece;
`
const Acoes = styled.View`
margin-top:15px;
flex-direction: row;
justify-content:space-between;
margin-left:23px;
margin-right:23px;
`
const Acao = styled.Text`
color:#09f;
`
const Valor = styled.Text``