import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../BottomTab/Home';
import Explore from '../BottomTab/Explore';
import Trips from '../BottomTab/Trips';
import Create from '../BottomTab/Create';
import Notification from '../BottomTab/Notification';

const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === 'Inicio') {
                        iconName = 'home' ;
                    } else if (route.name === 'Explorar') {
                        iconName = 'explore';
                    } else if (route.name === 'Crear') {
                        iconName = 'create';
                    } else if (route.name === 'Mis Viajes') {
                        iconName = 'card-travel';
                    } else if (route.name === 'Notificaciones') {
                        iconName = 'notifications-none';
                    }

                    const iconSize = focused ? 28 : 24;

                    return <MaterialIcons name={iconName} size={iconSize} color={color} />;
                },
            })}
            activeColor='black'
            inactiveColor='white'
            barStyle={{backgroundColor: '#0D6111'}}
        >
            <Tab.Screen name="Inicio" component={Home} />
            <Tab.Screen name="Explorar" component={Explore} />
            <Tab.Screen name="Crear" component={Create} />
            <Tab.Screen name="Mis Viajes" component={Trips} />
            <Tab.Screen name="Notificaciones" component={Notification} />
        </Tab.Navigator>
    );
}

export default TabNavigator;
