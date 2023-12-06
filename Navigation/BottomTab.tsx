import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../Screens/Main';
import Services from '../Screens/Services';
import Usage from '../Screens/Usage';
import Help from '../Screens/Help';
import Else from '../Screens/Else';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomStack = createBottomTabNavigator();

function BottomStackInside() {
  return(
    <BottomStack.Navigator
      initialRouteName='Main'
      screenOptions={{
      tabBarActiveTintColor: '#008080',
      tabBarInactiveTintColor: '#A9A9A9',
      tabBarBackground: () => (
      <View style={{backgroundColor: '#F0F8FF', height: 120}} />
      ),
      tabBarLabelStyle: {
          fontSize: 9,
          fontWeight: 'bold',
      },
      }}>
      <BottomStack.Screen name='Main' component={Main} options={{
        headerShown: false,
        title: 'Главная',
        tabBarIcon: ({ color }) => (
          <Icon name="home-sharp" color={color} size={22} />
        ),
        }}/>
      <BottomStack.Screen name='Services' component={Services} options={{
        headerShown: false,
        title: 'Тарифы',
        tabBarIcon: ({ color }) => (
          <Icon name="pricetags-sharp" color={color} size={22} />
        ),
        }}/>
      <BottomStack.Screen name='Usage' component={Usage} options={{
        headerShown: false,
        title: 'История',
        tabBarIcon: ({ color }) => (
          <Icon name="analytics-sharp" color={color} size={22} />
        ),
        }}/>
      <BottomStack.Screen name='Help' component={Help} options={{
        headerShown: false,
        title: 'Помощь',
        tabBarIcon: ({ color }) => (
          <Icon name="heart-sharp" color={color} size={22} />
        ),
        }}/>
      <BottomStack.Screen name='Else' component={Else} options={{
        headerShown: false,
        title: 'Еще',
        tabBarIcon: ({ color }) => (
          <Icon name="ellipsis-horizontal-sharp" color={color} size={22} />
        ),
        
        }}/>
  </BottomStack.Navigator>
  )
}

export default BottomStackInside

const styles = StyleSheet.create({})