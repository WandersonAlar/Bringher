import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Configuracao extends Component {
  render() {
    return (
      <View style={styles.Configuracao}>
        <Text> Configuracao </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    Configuracao:{
        flex:1
    }
})
