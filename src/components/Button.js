import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { cor } from '../constants/tema'
import  Texto  from './Texto'

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
       {typeof children === 'string' ? <Texto color={cor.secondaria}>{children}</Texto>:children}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    Button:{
        backgroundColor: cor.principal,
        borderRadius: 4,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
