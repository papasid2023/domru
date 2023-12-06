import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native'
import { FIREBASE_AUTH } from '../../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { useMMKV, MMKV } from 'react-native-mmkv';
import Icon from 'react-native-vector-icons/Ionicons';
import Main from '../../Main';


const Notifications = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const storage = new MMKV({id: `user-${email}-storage`});

  const auth = FIREBASE_AUTH;

  const SignUpButton = async () => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
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
    } catch (error) {
      console.log(error)
    }
  }

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.centerview}>
      <View style={styles.headertitle}>
        <Icon.Button onPress={() => navigation.goBack()} iconStyle={styles.iconheader} borderRadius={40} width={38} height={38} backgroundColor={'#edf8fa'} color='black' size={20} name='chevron-back-outline' />
      </View>
      <Text style={styles.textstyle}>Регистрация нового пользователя</Text>
      <Text style={styles.description}>Введите свои данные</Text>
      <TextInput value={email} style={styles.buttonhistory} onChangeText={setEmail} autoCapitalize='none' placeholder='Введите вашу почту'></TextInput>
      <TextInput value={password} style={styles.buttonhistory} secureTextEntry={true} autoCapitalize='none' onChangeText={setPassword} placeholder='Пароль'></TextInput>
      <View style={styles.buttons}>
      <TouchableOpacity style={styles.textbutton}>
          <Text style={styles.buttontextred} onPress={SignUpButton} onPressOut={() => navigation.navigate(Main)}>Зарегистрироваться</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Notifications

const styles = StyleSheet.create({
    centerview: {
      backgroundColor: '#edf8fa',
      width: '93%',
      height: 250,
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
      backgroundColor: '#008080', 
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
        color: '#008080',
        fontWeight: 'bold',
    },
    headertitle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      alignItems: 'center'
    },
    iconheader: {
      width: 30,
      justifyContent: 'center',
      alignItems: 'center',
  
    },
  })