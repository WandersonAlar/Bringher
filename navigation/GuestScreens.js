import {  createStackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Forgot from '../screens/Forgot';
import Register from '../screens/Register';


export default createStackNavigator({ Login, Forgot, Register }, { defaultNavigationOptions: { header: null } })