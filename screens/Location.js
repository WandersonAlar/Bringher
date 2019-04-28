import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Localizacao extends Component {
  render() {
    return (
      <View style={styles.Localizacao}>
        <Text> Localizacao </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    Localizacao:{
        flex:1
    }
})
