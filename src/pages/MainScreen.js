import React from 'react'
import styled from 'styled-components/native'
import Container from '../components/Container';
import { connect } from 'react-redux';
import ProdutoCard from '../components/ProdutoCard';
import { ScrollView, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native'
import { Icon } from 'expo'
import Menu from '../components/Menu';

const Produtos = [
    {
        id:1,
        Titulo:'Produto 1',
        Valor:'200,52',
        chegarEm:'10',
        Entrega:'Fortaleza-CE',
        Descricao: 'Aenean dapibus nunc nec mauris sodales, vitae tempus sem fringilla. Donec sed ultrices elit. Vestibulum ultricies ante pulvinar, auctor orci ut, cursus metus. Aliquam feugiat arcu a orci hendrerit placerat. Mauris vehicula neque eu magna feugiat congue vel non nisi. Fusce volutpat leo non quam bibendum dictum. Duis est tortor, eleifend nec aliquet non, sagittis ac mauris. '
    },
    {
        id:2,
        Titulo:'Produto 2',
        Valor:'45,20',
        chegarEm:'20',
        Entrega:'São Paulo-SP',
        Descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi magna purus, tempus sed dapibus venenatis, mollis a ante. Vivamus maximus commodo ligula, non blandit tortor tempus sed. Etiam gravida at dui id vulputate. Maecenas fermentum mauris ut pretium maximus. Nunc quis sagittis ipsum. Vestibulum nec sapien quis lacus accumsan pretium. Proin nisi lectus, efficitur varius purus ut, elementum ullamcorper elit. Quisque commodo urna quis nunc ullamcorper, quis bibendum lectus lacinia. Phasellus lobortis imperdiet consequat. Nam porttitor tempor dictum'
    },
    {
        id:3,
        Titulo:'Produto 3',
        Valor:'45,20',
        chegarEm:'15',
        Entrega:'São Paulo-SP',
        Descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi magna purus, tempus sed dapibus venenatis, mollis a ante. Vivamus maximus commodo ligula, non blandit tortor tempus sed. Etiam gravida at dui id vulputate. Maecenas fermentum mauris ut pretium maximus. Nunc quis sagittis ipsum. Vestibulum nec sapien quis lacus accumsan pretium. Proin nisi lectus, efficitur varius purus ut, elementum ullamcorper elit. Quisque commodo urna quis nunc ullamcorper, quis bibendum lectus lacinia. Phasellus lobortis imperdiet consequat. Nam porttitor tempor dictum'
    },
    {
        id:4,
        Titulo:'Produto 4',
        Valor:'120,20',
        chegarEm:'5',
        Entrega:'Fortaleza-CE',
        Descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi magna purus, tempus sed dapibus venenatis, mollis a ante. Vivamus maximus commodo ligula, non blandit tortor tempus sed. Etiam gravida at dui id vulputate. Maecenas fermentum mauris ut pretium maximus. Nunc quis sagittis ipsum. Vestibulum nec sapien quis lacus accumsan pretium. Proin nisi lectus, efficitur varius purus ut, elementum ullamcorper elit. Quisque commodo urna quis nunc ullamcorper, quis bibendum lectus lacinia. Phasellus lobortis imperdiet consequat. Nam porttitor tempor dictum'
    },
]

const MensagemGreet = () =>{
    const hoje = new Date()
    const horaAtual = hoje.getHours()

if (horaAtual < 12) {
  return 'Bom dia,'
} else if (horaAtual < 18) {
  return 'Boa tarde,'
} else {
  return 'Boa noite,'
}
}

const MainScreen = ({ Usuario,abrirMenu,navigation }) => {
    return (
        <Container>
            <StatusBar barStyle='dark-content' />
            <Menu/>
            <SafeAreaView>
            <ScrollView
            style={{height:'100%'}}
            showsVerticalScrollIndicator={false}
            >
            <UserHeader >
            <TouchableOpacity onPress={abrirMenu} style={{ position:'absolute',top:0,left:0 }}>
                <Avatar source={{uri:Usuario.photoURL || `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${Usuario.email}`}}/>
                </TouchableOpacity>
                <Greet>{MensagemGreet()}</Greet>
                <Name>{Usuario.displayName || Usuario.email}</Name>
                <Icon.Ionicons
                 name='ios-notifications' 
                 size={24} 
                 color='#4775f2'
                 style={{position:'absolute',right:20,top:5}}
                 />
            </UserHeader>

            <Title>Seus pedios criados</Title>
     
            {Produtos.map(produto => <ProdutoCard navigate={navigation.navigate} key={produto.id} { ...produto } />)}
            </ScrollView>
                <Botao>
                    <TextoBotao>Criar Pedido</TextoBotao>
                </Botao>
            </SafeAreaView>
        </Container>
    )
}
const Select = state => ({
    Usuario: state.Usuario
    });
const mapDispacthToProps = dispatch => ({
    abrirMenu:()=> dispatch({type:'ABRIR_MENU'})
})
export default  connect(Select,mapDispacthToProps)(MainScreen);

const UserHeader = styled.View`
width:100%;
margin-top:50px;
padding-left:80px;
`;
const Greet = styled.Text`
font-size:12px;
color:#b8bece;
font-weight:500;
`
const Avatar = styled.Image`
width:44;
height:44;
background:#b8bece;
border-radius:22px;
margin-left:20px;

`
const Name = styled.Text`
font-size:18px;
color:#3c4560;
font-weight:bold;
`
const Title = styled.Text`
color:#b8bece;
font-weight:600;
font-size:15px;
margin-left:20px;
margin-top:50px;
text-transform:uppercase;
`
const Botao = styled.TouchableOpacity`
position: absolute;
width: 70%;
height:40px;
border-radius:14px;
background-color:#4775f2;
align-self: center;
bottom: 15px;
`
const TextoBotao = styled.Text`
text-align:center;
color:#fff;
font-size:14px;
font-weight:bold;
margin-top: 10px;
`