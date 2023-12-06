import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../Screens/Main/SignIn';
import SignUp from '../Screens/Main/SignUp';
import Notifications from '../Screens/Main/InsideWindows/Notifications';

const Stack = createNativeStackNavigator();

function LoginRegister() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='SignIn' component={SignIn} options={{headerShown: false}}/>
            <Stack.Screen name='SignUp' component={SignUp} options={{headerShown: false}}/>
            <Stack.Screen name='Notifications' component={Notifications} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default LoginRegister

const styles = StyleSheet.create({})