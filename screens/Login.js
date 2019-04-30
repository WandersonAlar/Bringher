import React, { Component } from 'react'
import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Block, Input, Text, Button } from '../components'

export default class Login extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <KeyboardAvoidingView
        enabled
        behavior="padding"
        style={{ flex: 1 }}
      >
        <Block center middle>
          <Block middle>
            <Text size={35}>Bringher</Text>
            <Text>Bring anything from anywhere.</Text>
          </Block>
          <Block center flex={2.5}>
            <Input label='E-mail' type='email-address' width={0.8} />
            <Input label='Senha' password width={0.8} />
            <Text color='gray' onPress={() => navigation.navigate('Register')}>Não tem uma conta? <Text color='#1abc9c'>Cadastre-se</Text></Text>
            <Block style={{ marginTop: 12 }}>
              <Button style={{ marginBottom: 12 }} width={0.6} onPress={() => navigation.navigate('Home')}>Login</Button>
            </Block>

          </Block>

        </Block>
      </KeyboardAvoidingView>
    )
  }
}


