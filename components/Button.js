import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Dimensions,Text } from 'react-native'
import Colors from '../constants/Colors'

const { width:WIDTH } = Dimensions.get('window');

export default class Button extends Component {
  render() {
      const { children, width, style,cor, ...props } = this.props;
      const buttonStyle =[
        styles.Button,
        width && {width:WIDTH*width},
        cor && {backgroundColor: cor},
        style
      ]
    return (
      <TouchableOpacity {...props} style={buttonStyle}>
       {typeof children === 'string' ? <Text style={{color:'#ccc'}}>{children}</Text>:children}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    Button:{
        borderColor:'rgba(190, 144, 212,0.6)',
        borderWidth:2,
        borderRadius: 4,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
