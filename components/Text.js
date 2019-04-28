import React, { Component } from 'react'
import { Text as BaseText, StyleSheet } from 'react-native'

export default class Text extends Component {
    
  render() {
    const {children,color,size,...props} = this.props;
    const TextStyle = [
        styles.base,
        color && {color},
        size && {fontSize:size}
    ]

    return <BaseText {...props} style={TextStyle}>{children}</BaseText>
  }
}

const styles = StyleSheet.create({
    base:{
        
    }
})
