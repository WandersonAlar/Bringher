import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import MainScreen from '../pages/MainScreen';
import LoginScreen from '../pages/LoginScreen';
import CadastroScreen from '../pages/CadastroScreen';
import EsqueciScreen from '../pages/EsqueciScreen';
import DetalheScreen from '../pages/DetalheScreen';

const Auth = createStackNavigator({
    Login: LoginScreen,
    Cadastro: CadastroScreen,
    Esqueci: EsqueciScreen
},{
    initialRouteName:'Login'
})
const Main = createStackNavigator({
    Home:MainScreen,
    Detalhe: DetalheScreen
},{
    defaultNavigationOptions:{
        header:null
        
    },
    initialRouteName:'Home'
}
)

export default createAppContainer(createSwitchNavigator({
    Auth,
    Main
},
{
  initialRouteName:'Auth'
}));