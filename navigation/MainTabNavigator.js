import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import InicioScreen from '../screens/InicioScreen';
import ViajanteScreen from '../screens/ViajanteScreen';
import PerfilScreen from '../screens/PerfilScreen';

const HomeStack = createStackNavigator({
  Home: InicioScreen,
  Viajante: ViajanteScreen
});




const PerfilStack = createStackNavigator({
  Perfil: PerfilScreen,
});





export default createStackNavigator({
  HomeStack,
  PerfilStack
},
{
  initialRouteName:'HomeStack'
});
