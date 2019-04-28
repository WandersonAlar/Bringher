import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Esqueci extends Component {
  render() {
    return (
      <View style={styles.Esqueci}>
        <Text> Esqueci </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    Esqueci:{
        flex:1
    }
})
