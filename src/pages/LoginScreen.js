import React,{ Fragment } from 'react'
import styled from 'styled-components/native'
import { Dimensions, ActivityIndicator } from 'react-native';
import Vector from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { Icon, Facebook } from 'expo'
import * as Firebase from 'firebase'

import Campo from '../components/Campo'


const { width: WIDTH } = Dimensions.get('window')

class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

    state = {
        email: '',
        senha: '',
        Carregando: false
    }
    componentWillMount(){
        this.setState({Carregando: true}); 
    }
    componentDidMount(){
        if(!this.props.Usuario){
            this.setState({Carregando: false});
        }
    }
    componentWillReceiveProps(props){
        if(props.Usuario){
            this.props.navigation.navigate('Home');
        }else {
            this.setState({Carregando: false}); 
        }
    }

    LoginComUsuarioEsenha = async () => {
        const { email, senha } = this.state;
        this.setState({Carregando: true});
        Firebase.auth().signInWithEmailAndPassword(email, senha).catch(err => console.log(err)).then(user => {
            this.setState({Carregando: false});
        if(user){
            this.props.navigation.navigate('Home');
        }else{
            this.setState({Carregando: false});
        }
        })
    }

    LoginComFacebook = async () => {
        const { type, token} = await Facebook.logInWithReadPermissionsAsync('368313983801364', {
         permissions: ['public_profile'],
       })
       if (type === 'success') {
         const credendial = Firebase.auth.FacebookAuthProvider.credential(token);
         Firebase.auth().signInWithCredential(credendial).catch(err => console.log(err))
       } else {
         // type === 'cancel'
       }
       }
     
    handleChange = ({nome,texto}) => {
        this.setState({[nome]:texto})
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <Background source={require('../../assets/Images/skyBack.png')}>
           {this.state.Carregando ? 
           <Fragment>
            <ActivityIndicator size='large' color='rgba(255,255,255,0.3)'/>
                 <Logo>
                    <Titulo>Bringher</Titulo>
                    <Subtitulo>Bring anything from anywhere.</Subtitulo>
                </Logo>
           </Fragment>  :
            <Fragment>
               
                <Campo placeholder='Email' icone='at' nome='email' setState={this.handleChange} />
                <Campo placeholder='Senha' icone='lock' password nome='senha' setState={this.handleChange} />
                <Cadastro onPress={()=>navigate('Esqueci')} mt={4} size={14} cor='#4775f2'>Esqueci minha senha!</Cadastro>
                <Botao onPress={this.LoginComUsuarioEsenha}>
                    <TextoBotao>Fazer login</TextoBotao>
                </Botao>

                <Vector.Button onPress={this.LoginComFacebook} name='facebook' style={{ backgroundColor: '#4D6FA9', width: WIDTH - 55, height: 45 }}>
                    Login com Facebook
            </Vector.Button>

            <Cadastro mt={18} size={18} onPress={()=>navigate('Cadastro')}>Não tem uma conta? <Cadastro mt={18} size={18} cor='#4775f2'>Cadastre-se</Cadastro></Cadastro>
            </Fragment>
            }  
            </Background>
        )
    }
}

const Select = state => ({
    Usuario: state.Usuario
    });

export default connect(Select)(LoginScreen);


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

const Cadastro = styled.Text`
margin-top:${(p)=> p.mt ? p.mt : 3}px;
color:${(p)=> p.cor ? p.cor : '#f0f3f5'};
font-size:${(p)=> p.size ? p.size : 14}px;
font-weight:600;
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