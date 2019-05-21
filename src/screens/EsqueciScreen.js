import React from 'react';
import { Text, KeyboardAvoidingView, Image, Dimensions } from 'react-native'
import { Bloco, Texto, Input, Button } from '../components';
import { Imagens } from '../constants/Imagens';
import { cor } from '../constants/tema';

const { width: WIDTH } = Dimensions.get('window');
export class EsqueciScreen extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: cor.principal,
            height: 50,
          },
          headerTintColor:  cor.secondaria,
    }
  render() {
    return (
      <KeyboardAvoidingView
        enabled
        behavior="padding"
        style={{ flex: 1 }}
      >
        <Bloco centro meio bg={cor.fundo}>
  
          <Bloco centro flex={2.5}>
            <Input label='E-mail' type='email-address' width={0.8} />
            <Bloco style={{ marginTop: 12 }}>
              <Button style={{ marginBottom: 12 }} width={0.6} onPress={() => navigation.navigate('Login')}>Recuperar</Button>
            </Bloco>

          </Bloco>

        </Bloco>
      </KeyboardAvoidingView>
    );
  }
}

