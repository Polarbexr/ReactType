import React from 'react'
import { Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from './HomeScreen'
import { RegisterScreen } from './Register'
import IndexScreen from '.'


const Stack = createNativeStackNavigator()



export const MainStack = () =>{
   return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
        name='Home'
        component={HomeScreen}/>
        <Stack.Screen
        name='Register'
        component={RegisterScreen}/>
        <Stack.Screen
        name='Inicio'
        component={IndexScreen}/>

        </Stack.Navigator>

    </NavigationContainer>
   )
}


export default MainStack
