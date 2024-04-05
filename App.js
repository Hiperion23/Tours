import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Presentation from './src/Presentation';


export default function App  ()  {
  return (
    <NavigationContainer>
		<Presentation/>
		<StatusBar style='auto'/>
	</NavigationContainer>
  );
}