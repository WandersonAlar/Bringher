import React, { Component } from 'react'
import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Block, Input, Text, Button } from '../components'

export default class Register extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        enabled
        behavior="padding"
        style={{ flex: 1 }}
      >
        <Block center middle>
          <Block middle>
            <Text size={35}>Cadastre-se</Text>
          </Block>
          <Block center flex={2.5}>
          <Input label='Nome Completo' width={0.8} />
            <Input label='E-mail' type='email-address' width={0.8} />
            <Input label='Celular' type='phone-pad' width={0.8} />
            <Input label='Senha' password width={0.8} />
            <Input label='Repetir Senha' password width={0.8} />
            <Block style={{ marginTop: 12 }}>
              <Button style={{ marginBottom: 12 }} width={0.6} onPress={() => alert('cadastre-se')}>Cadastrar</Button>
            </Block>

          </Block>

        </Block>
      </KeyboardAvoidingView>
    )
  }
}


