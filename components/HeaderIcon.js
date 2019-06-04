import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default HeaderIcon = ({ viajante, onPress }) =>  <TouchableOpacity onPress={onPress}>
  <Icon 
    style={{ marginRight: 20 }}
    size={24}
    name={viajante ? 'user' : 'suitcase'}
  />
</TouchableOpacity>