import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import DrawerButton from '../components/DrawerButton'
export default class Perfil extends Component {
  render() {
    return (
      <View style={styles.Perfil}>
      <DrawerButton  navigation={this.props.navigation}/>
        <Text> Perfil </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    Perfil:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
