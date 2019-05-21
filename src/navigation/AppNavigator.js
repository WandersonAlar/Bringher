import Splash from './SplashScreen'
import { createStackNavigator,createSwitchNavigator,createDrawerNavigator, createAppContainer } from 'react-navigation'
import { LoginScreen, HomeScreen, EsqueciScreen, CadastroScreen } from '../screens'

const Auth = createStackNavigator({
Login:{ screen: LoginScreen },
Esqueci: {screen: EsqueciScreen },
Cadastro: {screen: CadastroScreen }
});


const Main = createDrawerNavigator({
Home:{ screen: HomeScreen }
})

const AppNavigator = createAppContainer(createSwitchNavigator({
    Splash,
    Auth,
    Main
},{ initialRouteName:'Splash' }))

export default AppNavigator;