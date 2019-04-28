import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Perfil extends Component {
  render() {
    return (
      <View style={styles.Perfil}>
        <Text> Perfil </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    Perfil:{
        flex:1
    }
})
