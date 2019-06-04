import React, { Component } from 'react'
import { Text, StyleSheet, View,TextInput,Dimensions } from 'react-native'
import Colors from '../constants/Colors';

const { width:WIDTH } = Dimensions.get('window');

export default class Input extends Component {
  render() {
    const {label,password,type,width, style, ...props} = this.props;
    const inputStyle = [
        styles.Input,
        width && {width:WIDTH*width},
        style
    ]
    return (
      <View>
        <TextInput 
         secureTextEntry={password}
         placeholder={' '+label}
         placeholderTextColor={Colors.placeholder}
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
        borderBottomWidth: 5,
        borderBottomColor: "#4775f2",
        width: 120,
        marginTop:5,
        fontSize: 14,
        borderRadius: 4,
      }
})
