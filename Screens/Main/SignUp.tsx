import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FIREBASE_AUTH, FIREBASE_DB, addDoc } from '../../firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import SignIn from './SignIn';
import { useMMKV, MMKV } from 'react-native-mmkv';
import { collection } from 'firebase/firestore';


const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [balance] = useState(0);
    const [DateOfCreate] = useState(0);

    const auth = FIREBASE_AUTH;

    const db = FIREBASE_DB;

    const storage = new MMKV({id: `user-${email}-storage`});

    const SignUpButton = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const StartCreateData = response.user.metadata.creationTime;
            storage.set('StartCreateData', `${StartCreateData}`)
            GenerateFirebaseDB();
            GenerateLocalData();
            console.log(response);
            console.log(`Юзер ${storage} зарегистрировался`);
        } catch (error) {
            console.log(error)
        }
    }

    const GenerateLocalData = async () => {
      try {
        storage.set('email', email)
        storage.set('pasword', password)
        storage.set('name', '')
        storage.set('city', '')
        storage.set('instagram', '')
        storage.set('telegram', '')
        storage.set('countRead', 0)
      } catch (error) {
        console.log(error)
      }
    }

    const GenerateFirebaseDB = async () => {
      try {
        const docRef = await addDoc(collection(FIREBASE_DB, "users"), {email, password, balance, DateOfCreate});
        storage.set('docRefId', docRef.id)
        console.log("В Firebase добавлен документ с ID: ", docRef.id);

      } catch (e) {
        console.error("Error adding document: ", e);
      } 
    }
    
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.centerview}>
      <Text style={styles.textstyle}>Регистрация</Text>
      <Text style={styles.description}>Введите свои данные</Text>
    <TextInput value={email} style={styles.buttonhistory} onChangeText={setEmail} autoCapitalize='none' placeholder='Введите вашу почту'></TextInput>
    <TextInput value={password} style={styles.buttonhistory} secureTextEntry={true} autoCapitalize='none' onChangeText={setPassword} placeholder='Пароль'></TextInput>
    <View style={styles.buttons}>
      <TouchableOpacity style={styles.textbutton}>
          <Text style={styles.buttontextred} onPress={SignUpButton}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.registertext}>
        <Text>Есть аккаунт?</Text>
        <TouchableOpacity>
            <Text style={styles.textregister} onPress={() => navigation.navigate(SignIn)}>Войти</Text>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default SignUp;

const styles = StyleSheet.create({
    centerview: {
      backgroundColor: '#edf8fa',
      width: '93%',
      height: 290,
      position: 'absolute',
      marginTop: 255,
      borderRadius: 24,
      alignSelf: 'center',
      justifyContent: 'cente'
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
      backgroundColor: 'red', 
      width: '55%', 
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
        color: 'red',
        fontWeight: 'bold',
    }
  })