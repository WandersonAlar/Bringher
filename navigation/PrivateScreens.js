import { Dimensions } from 'react-native'
import { createDrawerNavigator } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import Location from '../screens/Location';
import Order from '../screens/Order';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const {width: WIDTH} = Dimensions.get('window');
export default createDrawerNavigator({
    Home: {
        screen:MainScreen 
    },
    Location: {
        screen:Location 
    },
    Order: {
        screen:Order 
    },
    Profile: {
        screen:Profile 
    },
    Settings: {
        screen:Settings 
    }
    
},
{
    drawerWidth:WIDTH*0.75,
})