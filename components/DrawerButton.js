import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Icon } from 'native-base'
export default class DrawerButton extends Component {
  render() {
    return <Icon 
    name='md-menu'  
    style={styles.DrawerButton}
    onPress={this.props.navigation.toggleDrawer}
    />
  }
}

const styles = StyleSheet.create({
  DrawerButton:{
    top:40,
    left:20,
    position: 'absolute',
    zIndex:10
  }

})
