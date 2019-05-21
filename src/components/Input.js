import React, { Component } from 'react'
import { Text, StyleSheet, View,TextInput,Dimensions } from 'react-native'
import { cor, texto } from '../constants/tema';

const { width:WIDTH } = Dimensions.get('window');

export default class Input extends Component {
  render() {
    const {label,password,type,width, ...props} = this.props;
    const inputStyle = [
        styles.Input,
        width && {width:WIDTH*width}
    ]
    return (
      <View>
        <TextInput 
         secureTextEntry={password}
         placeholder={' '+label}
         placeholderTextColor={cor.placeHolder}
         autoCapitalize="none"
         autoCorrect={false}
         keyboardType={type}
         style={inputStyle}
         {...props}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
      Input:{
        height: 45,
        backgroundColor: 'rgba(6, 82, 221,0.1)',
        width: 120,
        marginTop:5,
        fontSize:texto.size.medio,
        borderRadius: 4,
      }
})
