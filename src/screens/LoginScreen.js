import React from 'react';
import { KeyboardAvoidingView, Image, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Bloco, Texto, Input, Button } from '../components'
import { Imagens } from '../constants/Imagens';
import { ACTIONS } from '../actions/usuarioActions'
import { cor } from '../constants/tema';

const { width: WIDTH } = Dimensions.get('window');
class LoginScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: cor.principal,
      height: 50,
    },
    headerTintColor:  cor.secondaria
  }

  Login = () => {
    alert(this.state.email)
  }


  render() {
    const { navigation } = this.props;
    return (
      <KeyboardAvoidingView
        enabled
        behavior="padding"
        style={{ flex: 1 }}
      >
        <Bloco centro meio bg={cor.fundo}>
      
          <Bloco centro flex={2.5}>
            <Input label='E-mail' type='email-address' onTextChange={t => this.setState({['email']:t})} width={0.8} />
            <Input label='Senha' onTextChange={t => this.setState({['senha']:t})} password width={0.8} />
            <Texto color={cor.link} onPress={() => navigation.navigate('Esqueci')} style={{ marginTop: 12 }}>Esqueci a senha</Texto>
            <Bloco style={{ marginTop: 12 }}>
              <Button style={{ marginBottom: 12 }} width={0.6} onPress={this.Login}>Login</Button>
              <Texto color={cor.texto} onPress={() => navigation.navigate('Home')} style={{ marginTop: 12 }}>Não tem uma conta? <Texto color={cor.link}>Cadastre-se</Texto></Texto>
            </Bloco>

          </Bloco>

        </Bloco>
      </KeyboardAvoidingView>
    );
  }
}
const mapActionsToProps = dispatch => bindActionCreators(ACTIONS,dispatch);
const select = state => ({
  Usuario: state.Usuario
})

export default connect(select,mapActionsToProps)(LoginScreen)