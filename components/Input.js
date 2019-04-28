import React, { Component } from 'react'
import { Text, StyleSheet, View,TextInput,Dimensions } from 'react-native'

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
        <View style={styles.label}>
        <Text style={{textTransform: 'uppercase'}}>{label}</Text>
        </View>
        <TextInput 
         secureTextEntry={password}
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
    label: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
      },
      Input:{
        height: 45,
        backgroundColor: 'rgba(41, 128, 185,0.2)',
        width: 120,
        borderColor: '#dfe4ea',
        borderRadius: 4,
        borderWidth: 0.5,
      }
})
