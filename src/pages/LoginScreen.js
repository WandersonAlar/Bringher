import React from 'react'
import styled from 'styled-components/native'
import { Dimensions, ActivityIndicator } from 'react-native';
import Vector from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'expo'
import * as Firebase from 'firebase'


const { width: WIDTH } = Dimensions.get('window')

class LoginScreen extends React.Component {

    state = {
        email: '',
        senha: '',
        Carregando: false
    }


    LoginComUsuarioEsenha = async () => {
        const { email, senha } = this.state;
        this.setState({Carregando: true});
        Firebase.auth().signInWithEmailAndPassword(email, senha).catch(err => console.log(err)).then(user => {
            this.setState({Carregando: false});
        if(user){
            this.props.navigation.navigate('Home');
        }
        })
    }


    render() {
        return (
            <Background source={require('../../assets/skyBack.png')}>
           {this.state.Carregando && <ActivityIndicator size='large' color='rgba(255,255,255,0.3)'/>}  
                <Logo>
                    <Titulo>Bringher</Titulo>
                    <Subtitulo>Bring anything from anywhere.</Subtitulo>
                </Logo>
                <Campo>
                    <Icon.Ionicons
                        name='ios-person'
                        size={28}
                        color='rgba(255,255,255,0.3)'
                        style={{
                            position: 'absolute',
                            top: 6,
                            left: 15
                        }}
                    />
                    <Input placeholder='E-mail' keyboardType='email-address' onChangeText={t => this.setState({ email: t })} />
                </Campo>
                <Campo>
                    <Icon.Ionicons
                        name='ios-lock'
                        size={28}
                        color='rgba(255,255,255,0.3)'
                        style={{
                            position: 'absolute',
                            top: 6,
                            left: 15
                        }}
                    />
                    <Input placeholder='Senha' secureTextEntry onChangeText={t => this.setState({ senha: t })} />
                </Campo>
                <Cadastro>Não tem uma conta? <Cadastro cor='#4775f2'>Cadastre-se</Cadastro></Cadastro>
                <Botao onPress={this.LoginComUsuarioEsenha}>
                    <TextoBotao>Fazer login</TextoBotao>
                </Botao>

                <Vector.Button onPress={() => { }} name='facebook' style={{ backgroundColor: '#4D6FA9', width: WIDTH - 55, height: 45 }}>
                    Login com Facebook
            </Vector.Button>
            </Background>
        )
    }
}
export default LoginScreen;
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
const Campo = styled.View`
margin-top: 8px;
`
const Cadastro = styled.Text`
margin-top:2px;
color:${(p)=> p.cor ? p.cor : '#f0f3f5'};
font-weight:600;
`

const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255,0.7)',
    underlineColorAndroid: 'transparent',
    autoCompleteType: 'off',
    autoCapitalize:'none'
})`
width:${WIDTH - 55};
height:45px;
font-size:16px;
color:rgba(255,255,255,0.7);
padding-left:45px;
border-radius: 5px; 
background-color: rgba(255,255,255,0.3)
`


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