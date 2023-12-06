import React, { useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { useMMKV } from 'react-native-mmkv';
import Notifications from './InsideWindows/Notifications';
import NumberOfDocument from './InsideWindows/NumberOfDocument';

const Header = () => {
    
    const auth = FIREBASE_AUTH;

    const CurrentUserEmail = auth.currentUser?.email;

    const storage = useMMKV({id: `user-${CurrentUserEmail}-storage`});

    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.docnumber} onPress={() => navigation.navigate(NumberOfDocument)}>
            <Image source={require('../../Src/Images/unnamed.png')} style={{position: 'absolute', width: 35, height: 35, marginLeft: 20}}></Image>
            <Text style={styles.text}>Привет, {storage.getString('name')}</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.buttonback}>
          <Icon.Button backgroundColor={'white'} iconStyle={styles.buttonback} onPress={() => navigation.navigate(Notifications)} name={'notifications-outline'} />
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ADD8E0',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 110,
        alignItems: 'center',
    },
    docnumber: {
        backgroundColor: 'white',
        width: '80%',
        height: 38,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 70,
        color: '#383535',
    },
    icon: {
        marginRight: 10,
        borderRadius: 25,
        height: 38,
        width: 38,
    },
    icon2: {
        fontSize: 20,
        color: '#383535',
    },
    icon2background: {
        padding: 8,
        borderRadius: 25,
        height: 38,
        width: 38,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    },
    iconbutton: {
      backgroundColor: 'white',
      width: 38,
      height: 38,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 15,
    },
    buttonback: {
      backgroundColor: 'white',
      marginRight: 15,
      width: 38,
      borderRadius: 50,
      color: '#383535',
    }
})