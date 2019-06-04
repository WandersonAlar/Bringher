import React from 'react'
import styled from 'styled-components/native'
import Container from '../components/Container';
import ProdutoCard from '../components/ProdutoCard';
import { ScrollView, SafeAreaView, Text } from 'react-native'
import { Icon } from 'expo'


class InicioScreen extends React.Component {
  static navigationOptions = {
    header:null
  };

  render() {
    const { displayName = '', email= '', photoURL = ''} = this.props.Usuario.Dados;
    return (
      <Container>
      <SafeAreaView>
      <ScrollView
      style={{height:'100%'}}
      showsVerticalScrollIndicator={false}
      >
      <UserHeader>
          <Avatar source={{uri:photoURL}} onPress={this.props.navigation.navigate('Perfil')}/>
          <Greet>{MensagemGreet()}</Greet>
          <Name>{displayName}</Name>
          <Icon.Ionicons
           name='ios-notifications' 
           size={24} 
           color='#4775f2'
           style={{position:'absolute',right:20,top:5}}
           />
      </UserHeader>
      <Title>Seus pedios criados</Title>
      {Produtos.map(produto => <ProdutoCard key={produto.id} { ...produto } />)}
      </ScrollView>
          <Botao>
              <TextoBotao>Criar Pedido</TextoBotao>
          </Botao>
      </SafeAreaView>
  </Container>
    );
  }



}

const select = state => ({
  Usuario: state.Usuario
})
export default connect(select)(InicioScreen)

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
position:absolute;
top:0;
left:0;
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