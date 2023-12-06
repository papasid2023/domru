import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginRegister from './LoginRegister';
import { FIREBASE_AUTH } from '../firebaseConfig';
import { User, onAuthStateChanged } from 'firebase/auth';
import MainPages from './MainPages';

const Stack = createNativeStackNavigator();

const auth = FIREBASE_AUTH;

const AppNavigation = () => {

  const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
    onAuthStateChanged(auth, (user) => {
    setUser(user);
    });
    }, [])

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginRegister'>
            {user? (
              <Stack.Screen name='MainPages' component={MainPages}  options={{headerShown: false}}/>
            ) : (
              <Stack.Screen name='LoginRegister' component={LoginRegister}  options={{headerShown: false}}/>
            )}
        </Stack.Navigator>
      </NavigationContainer>
  )
}


export default AppNavigation;