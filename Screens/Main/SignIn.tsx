import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import SignUp from './SignUp';


const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = FIREBASE_AUTH;

    const SignInButton = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            console.log('Юзер залогинился');
        } catch (error) {
            console.log(error)
        }
    }

    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.centerview}>
      <Text style={styles.textstyle}>Добро пожаловать</Text>
      <Text style={styles.description}>Войдите в свой аккаунт</Text>
    <TextInput value={email} style={styles.buttonhistory} onChangeText={setEmail} autoCapitalize='none' placeholder='Введите вашу почту'></TextInput>
    <TextInput value={password} style={styles.buttonhistory} secureTextEntry={true} autoCapitalize='none' onChangeText={setPassword} placeholder='Пароль'></TextInput>
    <View style={styles.buttons}>
      <TouchableOpacity style={styles.textbutton}>
          <Text style={styles.buttontextred} onPress={SignInButton}>Войти</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.registertext}>
        <Text>Нет аккаунта?</Text>
        <TouchableOpacity>
            <Text style={styles.textregister} onPress={() => navigation.navigate(SignUp)}>Регистрация</Text>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
    centerview: {
      backgroundColor: '#edf8fa',
      width: '93%',
      height: 290,
      position: 'absolute',
      marginTop: 255,
      borderRadius: 24,
      alignSelf: 'center',
    },
    textstyle: {
      paddingTop: 25, 
      fontSize: 16, 
      fontWeight: 'bold', 
      fontFamily: 'roboto',
      color: '#383535',
      alignSelf: 'center'
    },
    description: {
      fontSize: 13,
      paddingLeft: 25,
      paddingRight: 25,
      paddingTop: 10,
      color: '#383535',
      fontFamily: 'roboto',
      alignSelf: 'center',
    },
    buttons: {
      flexDirection: 'row',
      marginTop: 15,
      alignSelf: 'center'
    },
    icon: {
      fontSize: 20,
      color: '#383535'
    },
    textbutton: {
      borderRadius: 25, 
      backgroundColor: '#008080', 
      width: '30%', 
      height: 38, 
      justifyContent: 'center', 
      alignItems: 'center',
    },
    buttontextred: {
      color: 'white',
      fontSize: 15, 
      fontWeight: 'bold',
    },
    backrightbutton: {
      backgroundColor: '#DCDCDC', 
      borderRadius: 25, 
      width: 38, 
      height: 38, 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    buttonhistory: {
      borderRadius: 25, 
      backgroundColor: '#DCDCDC', 
      height: 38, 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '82%', 
      alignSelf: 'center', 
      marginTop: 10,
      paddingLeft: 20
    },
    textbuttonhistory: {
      fontSize: 14, 
      fontWeight: 'bold', 
      color: '#383535'
    },
    registertext: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
        marginTop: 30
    },
    textregister: {
        color: '#008080',
        fontWeight: 'bold',
    }
  })