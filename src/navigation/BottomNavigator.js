import 'react-native-gesture-handler';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../BottomTab/Home';
import Explore from '../BottomTab/Explore';
import Trips from '../BottomTab/Trips';
import Create from '../BottomTab/Create';
import Notification from '../BottomTab/Notification';

const Tab = createMaterialBottomTabNavigator()

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Inicio' component={Home}/>
            <Tab.Screen name='Explorar' component={Explore}/>
            <Tab.Screen name='Crear' component={Create}/>
            <Tab.Screen name='Mis Viajes' component={Trips}/>
            <Tab.Screen name='Notificaciones' component={Notification}/>
        </Tab.Navigator>
    )
}

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={Home}/>
            <Stack.Screen name='Details' component={Details}/>
        </Stack.Navigator>
    )
}

export default function BottomNavigator () {
    return (
            <TabNavigator/>
    )
}