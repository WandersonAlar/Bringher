import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import MainScreen from '../pages/MainScreen';
import LoginScreen from '../pages/LoginScreen';

const Auth = createStackNavigator({
    Login:LoginScreen
},{
    defaultNavigationOptions:{
        header:null
    }
})
const Main = createStackNavigator({
    Home:MainScreen
},{
    defaultNavigationOptions:{
        header:null
    }
}
)

export default createAppContainer(createSwitchNavigator({
    Auth,
    Main
},
{
  initialRouteName:'Auth'
}));