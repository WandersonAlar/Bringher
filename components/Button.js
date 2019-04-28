import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Text from './Text'

const { width:WIDTH } = Dimensions.get('window');

export default class Button extends Component {
  render() {
      const { children, width, ...props } = this.props;
      const buttonStyle =[
        styles.Button,
        width && {width:WIDTH*width}
      ]
    return (
      <TouchableOpacity {...props} style={buttonStyle}>
       {typeof children === 'string' ? <Text color='#ffffff'>{children}</Text>:children}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    Button:{
        backgroundColor: '#1abc9c',
        borderRadius: 4,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
