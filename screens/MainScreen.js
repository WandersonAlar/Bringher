import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Main extends Component {
  render() {
    return (
      <View style={styles.Main}>
        <Text> Main </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    Main:{
        flex:1
    }
})
