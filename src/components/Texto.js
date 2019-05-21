import React, { Component } from 'react'
import { Text as BaseText, StyleSheet } from 'react-native'
import { texto } from '../constants/tema';

export default class Text extends Component {
    
  render() {
    const {children,color,size,h1,h2,h3,...props} = this.props;
    const TextStyle = [
        styles.base,
        color && {color},
        size && {fontSize:size},
        h1 && {fontSize:texto.size.h1},
        h2 && {fontSize:texto.size.h2},
        h3 && {fontSize:texto.size.h3},
    ]

    return <BaseText {...props} style={TextStyle}>{children}</BaseText>
  }
}

const styles = StyleSheet.create({
    base:{
        
    }
})
