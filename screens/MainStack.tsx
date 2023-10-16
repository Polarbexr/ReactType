import React from 'react'
import { Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from './HomeScreen'
import { RegisterScreen } from './Register'
import IndexScreen from '.'
import InfoHipoteca from './InfoHipoteca'


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
        <Stack.Screen
        name='Hipoteca'
        component={InfoHipoteca}/>

        </Stack.Navigator>

    </NavigationContainer>
   )
}


export default MainStack
