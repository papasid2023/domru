import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo, useRef } from 'react';
import { ActionSheetIOS, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useMMKV } from 'react-native-mmkv';
import Icon from 'react-native-vector-icons/Ionicons';
import { FIREBASE_AUTH } from '../../../firebaseConfig';


const UpBalance = () => {

  const auth = FIREBASE_AUTH;

  const CurrentUserEmail = auth.currentUser?.email;

  const storage = useMMKV({id: `user-${CurrentUserEmail}-storage`});

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.headertitle}>
        <Icon.Button onPress={() => navigation.goBack()} iconStyle={styles.iconheader} borderRadius={40} width={38} height={38} backgroundColor={'white'} color='black' size={20} name='chevron-back-outline' />
        <Text style={styles.texttitle}>Оплата услуг</Text>
      </View>
      <View style={styles.bodyforinput}>
        <Text style={styles.description}>Почта, на которую зарегистрирован договор</Text>
        <Text style={styles.value}>{CurrentUserEmail}</Text>
        <Text style={styles.description}>Способ оплаты</Text>

        <Text style={styles.description}>Сумма к оплате</Text> 
      </View>
    </SafeAreaView>
  )
}

export default UpBalance

const styles = StyleSheet.create({
  iconheader: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: 'white',
    flex: 1,
  },
  headertitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center'
  },
  texttitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  invisibletext: {
    color: 'white',
  },
  description: {
    fontSize: 12,
    paddingLeft: 25,
  },
  bodyforinput: {
    marginTop: 25
  },
  value: {
    paddingLeft: 25,
    padding: 5,
    fontSize: 16,
    marginBottom: 10,
    color: '#383535',
    fontWeight: 'bold'
  }
})