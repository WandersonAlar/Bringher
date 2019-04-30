import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import DrawerButton from '../components/DrawerButton'
export default class Localizacao extends Component {
  render() {
    return (
      <View style={styles.Localizacao}>
       <DrawerButton  navigation={this.props.navigation}/>
        <Text> Localizacao </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    Localizacao:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
