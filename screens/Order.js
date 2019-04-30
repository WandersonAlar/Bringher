import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import DrawerButton from '../components/DrawerButton'
export default class Pedido extends Component {
  render() {
    return (
      <View style={styles.Pedido}>
      <DrawerButton  navigation={this.props.navigation}/>
        <Text> Pedido </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    Pedido:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
