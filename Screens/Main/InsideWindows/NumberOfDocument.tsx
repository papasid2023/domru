import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Linking } from 'react-native'
import { FIREBASE_AUTH } from '../../../firebaseConfig';
import { useMMKV } from 'react-native-mmkv';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Notifications from './Notifications';
import * as Animatable from 'react-native-animatable';
import { ProgressBar } from 'react-native-paper';



const NumberOfDocument = () => {

  const auth = FIREBASE_AUTH;

  const CurrentUserEmail = auth.currentUser?.email;

  const storage = useMMKV({id: `user-${CurrentUserEmail}-storage`})

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [telegram, setTelegram] = useState('');
  const [instagram, setInstagram] = useState('');
  
  useEffect(() => {
    GetDataFromStorage();
  }, [])

  const SaveDataInStorage = () => {
    try {
      storage.set('name', name);
      storage.set('city', city);
      storage.set('telegram', telegram);
      storage.set('instagram', instagram);
      console.log('В', `user-${CurrentUserEmail}-storage`, 'добавлены данные')
    } catch (error) {
      console.log(error)
    }
  }

  const GetDataFromStorage = async () => {
    try {
      setEmail(storage.getString('email'));
      setPassword(storage.getString('password'));
      setName(storage.getString('name'));
      setCity(storage.getString('city'));
      setTelegram(storage.getString('telegram'));
      setInstagram(storage.getString('instagram'));
    } catch (error) {
      console.log(error)
    }
  }

  const SignOut = async () => {
    try {
      const SignOutButton = auth.signOut();
      console.log('Юзер вышел');
    } catch (error) {
      console.error(error);
    }
  }

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.centerview}>
      <View style={styles.headertitle}>
        <Icon.Button onPress={() => navigation.goBack()} iconStyle={styles.iconheader} borderRadius={40} width={38} height={38} backgroundColor={'#edf8fa'} color='black' size={20} name='chevron-back-outline' />
        <Text style={styles.texttitle}>Данные клиента</Text>
        <Icon.Button onPress={() => navigation.navigate(Notifications)} iconStyle={styles.iconheader} borderRadius={40} width={38} height={38} backgroundColor={'#edf8fa'} color='black' size={20} name='add-circle-outline' />
      </View>
      <Text style={styles.textstyle}>Добро пожаловать, {name}</Text>
      <Text style={styles.description}>Договор заключен и действует с 2017 года</Text>
    <TextInput style={styles.buttonhistory} value={name} onChangeText={setName} autoCapitalize='none' placeholder='Ваше имя' />
    <TextInput style={styles.buttonhistory} value={city} onChangeText={setCity} autoCapitalize='none'  placeholder='Город' />
    <TextInput style={styles.buttonhistory} value={telegram} onChangeText={setTelegram} autoCapitalize='none'  placeholder='Профиль в Telegram' />
    <TextInput style={styles.buttonhistory} value={instagram} onChangeText={setInstagram} autoCapitalize='none'  placeholder='Профиль в Instagram' />
    <View style={styles.emailandpasswordbutton}>
      <Text>{email}</Text>
    </View>

      
    <View style={styles.registertext}>
        <TouchableOpacity style={styles.buttonsbelow}>
            <Text style={styles.textregister} onPress={SaveDataInStorage}>Сохранить</Text>
            <Text style={styles.textregister} onPress={SignOut}>Сменить пользователя</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.linkButtons}>    
      <TouchableOpacity onPress={() => Linking.openURL('https://t.me/' + `${telegram}`)} style={styles.telegramButton}>
        <Icon name='paper-plane' />
        <Text>{telegram}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com/' + `${instagram}`)} style={styles.telegramButton}>
        <Icon name='logo-instagram' />
        <Text>{instagram}</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default NumberOfDocument

const styles = StyleSheet.create({
  centerview: {
    backgroundColor: '#edf8fa',
    width: '100%',
    height: '100%',
    position: 'absolute',
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
    backgroundColor: 'red', 
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
      marginTop: 30,
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
  emailandpasswordbutton: {
    color: 'black',
    borderRadius: 25, 
    backgroundColor: '#DCDCDC', 
    height: 40, 
    justifyContent: 'center',
    width: '82%', 
    alignSelf: 'center', 
    marginTop: 10,
    paddingLeft: 20,

  },
  texttitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonsbelow: {
    alignItems: 'center'
  },
  boxofprizes: {
    width: 170,
    backgroundColor: '#FFE4E1',
    borderRadius: 25,
    padding: 15,
    alignItems: 'flex-start',
    alignSelf: 'center',
    marginTop: 30,
    flexDirection: 'row',
    gap: 5
  },
  descriptionforBox: {
    fontSize: 14,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 250,
    textAlign: 'center',
    marginTop: 25
  },
  telegramButton: {
    backgroundColor: '#edf8fa',
    borderRadius: 15,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    width: 150,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25
  },
  linkButtons: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 10
  },
  progress: {
    height: 7,
    backgroundColor: '#edf8fa',
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 40
  },
})