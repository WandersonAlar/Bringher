import PrivateScreens from './PrivateScreens';
import  GuestScreens from './GuestScreens';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';


const AppStack = PrivateScreens;
const AuthStack = GuestScreens;

export default createAppContainer(createSwitchNavigator(
    {
        Auth: AuthStack,
        App: AppStack
    },
    {
        initialRouteName: 'Auth',
    }
));