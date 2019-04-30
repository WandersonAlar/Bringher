import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import DrawerButton from '../components/DrawerButton'
export default class Main extends Component {
  render() {
    return (
      <View style={styles.Main}>
      <DrawerButton  navigation={this.props.navigation}/>
        <Text> Main </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    Main:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
