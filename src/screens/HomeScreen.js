import React from 'react';
import { Text } from 'react-native'
import { Bloco } from '../components';
import { connect } from 'react-redux'

class HomeScreen extends React.Component {
  render() {
    const { nome } = this.props.Usuario;
    return (
      <Bloco meio centro>
        <Text>Home {nome && nome}</Text>
      </Bloco>
    );
  }
}

const select = state => ({
  Usuario: state.Usuario
})

export default connect(select)(HomeScreen)