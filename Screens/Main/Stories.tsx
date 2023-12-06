import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableNativeFeedbackComponent, TouchableOpacity, View } from 'react-native';
import InstaStory from 'react-native-insta-story';
import { data } from '../../Src/Data/Stories';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import UpBalance from './InsideWindows/UpBalance';
import { FIREBASE_AUTH, FIREBASE_DB, getDoc } from '../../firebaseConfig';
import { useMMKV } from 'react-native-mmkv';
import { collection, doc } from 'firebase/firestore';


const Stories = () => {

  const [balance, setBalance] = useState('');

  const db = FIREBASE_DB;

  const auth = FIREBASE_AUTH;

  const CurrentUserEmail = auth.currentUser?.email;

  const storage = useMMKV({id: `user-${CurrentUserEmail}-storage`})

  const getDocRefId = storage.getString('docRefId')
  
  const getDocTest = async () => {
    try {
        const docRef = doc(db, "users", `${getDocRefId}`);
        const docSnap = await getDoc(docRef);
        setBalance(docSnap.data()?.balance)
      } catch (e) {
        console.error("Error get document: ", e);
      }
  }

  useEffect(() => {
    getDocTest();
  }, [])

  const StartCreateData = storage.getString('StartCreateData');

  const ourTime = StartCreateData?.slice(5,25);
  
  const currentTime = new Date().toLocaleTimeString();
  const currentDate = new Date().toLocaleDateString();

  const navigation = useNavigation();

  return (
    <>
      <InstaStory
      data={data}
      duration={10}
      avatarSize={100}
      pressedAvatarTextColor={'white'}
      unPressedAvatarTextColor={'white'}
      style={{backgroundColor: '#ADD8E0', height: 260}}
      avatarImageStyle={styles.avatarImageStyle}
      avatarWrapperStyle={{borderWidth: 0}}
      avatarTextStyle={styles.avatarTextStyle}
      />
    <View style={styles.centerview}>
      <Text style={styles.textstyle}>Услуги активны c {ourTime}</Text>
      <Text style={styles.description}>Пополните баланс на 600 ₽ до 20 декабря, чтобы сохранить доступ к услугам. Стоимость услуг за период с 20 декабря 2023 по 20 января 2024 - 600 ₽. Баланс: {balance} ₽</Text>
    </View>
    <View style={styles.buttons}>
      <TouchableOpacity style={styles.textbutton} onPress={() => navigation.navigate(UpBalance)}>
          <Text style={styles.buttontextred}>Пополнить на 600.0 ₽</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backrightbutton}>
        <Icon style={styles.icon} name={'ellipsis-horizontal-sharp'}></Icon>
      </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.buttonhistory}>
        <Text style={styles.textbuttonhistory}>История платежей и начислений</Text>
    </TouchableOpacity>
    </>
  )
}

export default Stories

const styles = StyleSheet.create({
  centerview: {
    backgroundColor: '#edf8fa',
    width: '93%',
    height: 240,
    position: 'absolute',
    marginTop: 255,
    borderRadius: 24,
    alignSelf: 'center'
  },
  textstyle: {
    paddingLeft: 25,
    paddingTop: 25, 
    fontSize: 16, 
    fontWeight: 'bold', 
    fontFamily: 'roboto',
    color: '#383535'
  },
  description: {
    fontSize: 13,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    color: '#383535',
    fontFamily: 'roboto',
  },
  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 35,
    marginTop: 15,
    marginRight: 35
  },
  icon: {
    fontSize: 20,
    color: '#383535'
  },
  textbutton: {
    borderRadius: 25, 
    backgroundColor: '#008080', 
    width: '85%', 
    height: 38, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  avatarTextStyle: {
    fontSize: 10, 
    fontWeight: 'bold', 
    position: 'absolute',
    padding: 10,  
    height: 'auto', 
    textShadowColor: 'black',
    textShadowRadius: 3,
  },
  avatarImageStyle: {
      width: 90,
     height: 125, 
     borderRadius: 15, 
     marginTop: 25, 
     paddingHorizontal: 52
  },
  buttontextred: {
    color: 'white',
    fontSize: 15, 
    fontWeight: 'bold'
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
    marginTop: 10
  },
  textbuttonhistory: {
    fontSize: 14, 
    fontWeight: 'bold', 
    color: '#383535'
  }
})