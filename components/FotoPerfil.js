import React from 'react';
import { Image } from 'react-native';

export default FotoPerfil = ({ url }) =>   <Image
source={{ uri: url }}
style={{ width: 64, height: 64 }}
resizeMode="cover"
/>