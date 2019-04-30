import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import DrawerButton from '../components/DrawerButton'
export default class Configuracao extends Component {
  render() {
    return (
      <View style={styles.Configuracao}>
      <DrawerButton  navigation={this.props.navigation}/>
        <Text> Configuracao </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    Configuracao:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
