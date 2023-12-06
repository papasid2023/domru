import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../Screens/Main/SignIn';
import SignUp from '../Screens/Main/SignUp';
import Notifications from '../Screens/Main/InsideWindows/Notifications';
import BottomStackInside from './BottomTab';
import NumberOfDocument from '../Screens/Main/InsideWindows/NumberOfDocument';
import UpBalance from '../Screens/Main/InsideWindows/UpBalance';

const Stack = createNativeStackNavigator();

function MainPages() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='BottomStackInside' component={BottomStackInside} options={{headerShown: false}}/>
            <Stack.Screen name='Notifications' component={Notifications} options={{headerShown: false}}/>
            <Stack.Screen name='NumberOfDocument' component={NumberOfDocument} options={{headerShown: false}}/>
            <Stack.Screen name='UpBalance' component={UpBalance} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default MainPages;

const styles = StyleSheet.create({})