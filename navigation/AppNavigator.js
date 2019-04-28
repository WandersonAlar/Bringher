import * as PrivateScreens from './PrivateScreens';
import * as GuestScreens from './GuestScreens';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';


const AppStack = createStackNavigator({ ...PrivateScreens });
const AuthStack = createStackNavigator({ ...GuestScreens }, { defaultNavigationOptions: { header: null } });

export default createAppContainer(createSwitchNavigator(
    {
        Auth: AuthStack,
        App: AppStack
    },
    {
        initialRouteName: 'Auth',
    }
));