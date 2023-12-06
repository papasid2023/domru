import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from "react-native-linear-gradient";



const CardCashback = () => {
  return (
    <>
    <TouchableOpacity style={{width: '100%', paddingLeft: 15, paddingRight: 15}}>
      <LinearGradient start={{x: 0, y: 1}} end={{x:1, y: 0}} colors={['#DAA520', '#008080']} style={styles.linearGradient}>
      <Image source={require('../../Src/Images/pl-card.png')} style={{width: 100, height: 80, marginLeft: 25, marginTop: 20}}></Image>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Text style={styles.textstyle}>Вступите в Дом.ру Бонус</Text>
            <Text numberOfLines={2} style={styles.description}>Получайте кешбэк бонусами и скидки от партнеров</Text>
          </View>
          <View style={styles.icon2background}>
            <Icon style={styles.icon} name={'chevron-forward-outline'}></Icon>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
    </>
  )
}

export default CardCashback;

const styles = StyleSheet.create({
    textstyle: {
    paddingLeft: 25,
    paddingTop: 10, 
    fontSize: 16, 
    fontWeight: 'bold', 
    fontFamily: 'roboto',
    color: 'white'
  },
  description: {
    width: 250,
    fontSize: 10,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 5,
    paddingBottom: 20,
    color: 'white',
    fontFamily: 'roboto',
  },
  linearGradient: {
    borderRadius: 24
  },
  icon: {
    fontSize: 20,
    color: '#383535',
    fontWeight: '100',
},
icon2background: {
  backgroundColor: 'white',
  borderRadius: 25,
  height: 38,
  width: 38,
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 25
}
})