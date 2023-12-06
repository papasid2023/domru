import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Options = () => {

  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.scrollview} >
        <TouchableOpacity style={styles.firstblock}>
            <View style={styles.bodyelement}>
                <Icon style={styles.icon} name={'calendar-outline'}></Icon>
            </View>
            <Text style={styles.textforblock}>Оплата 20 числа</Text>
            <Text style={styles.descriptionblock}>День оплаты можно изменить. Изменить</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemblock}>
            <View style={styles.bodyelement}>
                <Switch style={styles.switch} ios_backgroundColor="#008080" thumbColor={'white'}></Switch>
            </View>
            <Text style={styles.textforblock}>Автоплатеж</Text>
            <Text style={styles.descriptionItem}>Автоматическое пополнение баланса</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemblock}>
        <View style={styles.bodyelement}>
                <Switch style={{marginLeft: 15}} ios_backgroundColor="#008080" thumbColor={'white'}></Switch>
            </View>
            <Text style={styles.textforblock} >Отложить платеж на 5 дней</Text>
            <Text style={styles.descriptionItem}>Платите позже</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemblock}>
            <View style={{width: 30, height: 30, borderRadius: 25, justifyContent: 'center', margin: 5}}>
                <Image style={{width: 50, height: 15}} source={require('../../Src/Images/visa.png')}></Image>
            </View>
            <Text style={styles.textforblock} >Банковские карты</Text>
            <Text style={styles.descriptionItem}>Привязать карту для оплаты</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

export default Options

const styles = StyleSheet.create({
    icon: {
        fontSize: 15,
        color: 'white',
    },
    scrollview: {
        backgroundColor: 'white', 
        height: 130, 
        marginTop: 25, 
        flexDirection: 'row'
    },
    firstblock: {
        backgroundColor: '#edf8fa', 
        width: 130, 
        height: 90, 
        borderRadius: 15, 
        padding: 5, 
        marginTop: 15, 
        marginLeft: 15, 
        justifyContent: 'center'
    },
    bodyelement: {
        backgroundColor: '#008080', 
        width: 30, 
        height: 30, 
        borderRadius: 25, 
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: 5
    },
    textforblock: {
        fontSize: 10, 
        fontWeight: 'bold', 
        color:'#383535', 
        padding: 5
    },
    descriptionblock: {
        fontSize: 9, 
        width: 120, 
        paddingLeft: 5, 
        color: 'grey', 
        fontWeight: 500
    },
    itemblock: {
        backgroundColor: '#edf8fa',
         width: 130, 
         height: 90, 
         borderRadius: 15, 
         padding: 5, 
         marginTop: 15, 
         marginLeft: 10, 
         justifyContent: 'center'
    },
    descriptionItem: {
        fontSize: 9, 
        width: 120, 
        paddingLeft: 5, 
        color: 'grey', 
        fontWeight: 500
    },
    switch: {
        marginLeft: 15,
    }
})