import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Pedido extends Component {
  render() {
    return (
      <View style={styles.Pedido}>
        <Text> Pedido </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    Pedido:{
        flex:1
    }
})
