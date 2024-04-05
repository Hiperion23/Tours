import React from "react"
import {createDrawerNavigator} from "@react-navigation/drawer"
import DashboardScreen from "../screens/DashboardScreen"
import SettingsScreen from "../screens/SettingsScreen"
import HelpScreen from "../screens/HelpScreen"


const Drawer = createDrawerNavigator ()

export default function DrawerNavigation () {
    return (
        <Drawer.Navigator screenOptions={() =>({
            statusBarColor: '#6AB7F7',
            headerStyle: {backgroundColor: '#6AB7F7'},
            headerBackTitleVisible: false,
            headerTitleStyle: {color: '#fff', fontWeight: '900'},
            headerTintColor: '#fff',
            headerTitleAlign: 'center'
        }) }>
            <Drawer.Screen name="Perfil" component={DashboardScreen}/>
            <Drawer.Screen name="Configuracion" component={SettingsScreen}/>
            <Drawer.Screen name="Ayuda" component={HelpScreen}/>
        </Drawer.Navigator>
    )
}