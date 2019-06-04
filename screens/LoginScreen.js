import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView
} from 'react-native';
import * as Firebase from 'firebase'
import { Facebook, Google  } from 'expo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ACTIONS } from '../actions/Usuario'
import { MonoText } from '../components/StyledText';
import Input from '../components/Input'
import Logo from '../components/Logo';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Layout from '../constants/Layout';
import { Object } from 'core-js';
const { width } = Layout.window;


class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state ={
    email:'',
    senha:''
  }

  componentDidMount(){
    Firebase.auth().onAuthStateChanged(user => {
      if(user){
        if(Usuario.Dados && user.email == Usuario.Dados.email){
         
        }else{
          const id = user.providerData[0].email.replace('@','').replace('.','').replace('_','').replace('-','')
        Firebase.database().ref(`Users/${id}`).update(Object.assign({},
          user.providerData[0].displayName && {displayName: user.providerData[0].displayName},
          user.providerData[0].email && { email: user.providerData[0].email},
          user.providerData[0].phoneNumber && { phoneNumber: user.providerData[0].phoneNumber },
          user.providerData[0].photoURL && { photoURL: user.providerData[0].photoURL }
          ) )
        Firebase.database().ref(`Users/${id}`).once('value').then(snap => {
          this.props.setUserInfo(snap.val())
        })
        
      }
        
      }
     
    })
  }



  LoginComFacebook = async () => {
    const { type, token} = await Facebook.logInWithReadPermissionsAsync('368313983801364', {
     permissions: ['public_profile','email','user_gender','user_birthday'],
   })
   if (type === 'success') {
     const credendial = Firebase.auth.FacebookAuthProvider.credential(token);
     Firebase.auth().signInWithCredential(credendial).catch(err => console.log(err))
     this.props.navigation.navigate('Home')
   } else {
     // type === 'cancel'
   }
   }

   LoginComUsuarioEsenha  = async () => {
     const { email, senha }  =this.state;
    Firebase.auth().signInWithEmailAndPassword(email,senha).catch(err => console.log(err)).then(()=> this.props.navigation.navigate('Home'))
   }


  render() {
    return (
      <KeyboardAvoidingView style={styles.container}  behavior='padding' >
        <Logo />
   
        <View style={styles.LoginContainer}>
        <View style={{marginBottom:10}}>
        <Input label='e-mail'  width={0.8} onChangeText={t => this.setState({email: t})}   />
        <Input label='senha'  password width={0.8} onChangeText={t => this.setState({senha: t})}  />
        <MonoText onPress={()=>alert('Cadastro')}>Não tem uma conta? <MonoText style={{color:'lightblue'}}>Cadastre-se</MonoText></MonoText>
        <View style={{ marginTop:5, alignItems:'center' }}>
        <Button 
        width={0.3}
        onPress={()=>this.LoginComUsuarioEsenha()}
        >
          Logar
        </Button>
        </View>
        </View>
          <Text style={styles.OU}>OU</Text>
          <View style={{marginTop:10}}>
          <View>
            <Icon.Button onPress={this.LoginComFacebook} name='facebook' style={[styles.iconeLogin, { backgroundColor:'#4D6FA9'}]}>
            Login com Facebook
            </Icon.Button>
          </View>
   
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }


}

const mapActionsToProps = dispatch => bindActionCreators(ACTIONS, dispatch);
const select = state => ({
  Usuario: state.Usuario
})

export default connect(select, mapActionsToProps)(LoginScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  iconeLogin:{
    width: width * 0.8,
  },
  LoginContainer: {
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom:50
  },
  OU: {
    fontSize: 20,
    fontWeight:'800',
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  }
});
