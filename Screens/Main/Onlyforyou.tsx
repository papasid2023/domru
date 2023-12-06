import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Onlyforyou = () => {
  return (
    <>
    <View style={styles.titlecontainer}>
      <Text style={styles.titletext}>Только для вас</Text>
      <TouchableOpacity>
        <Icon style={styles.icon} name={'chevron-forward-outline'}></Icon>
      </TouchableOpacity>
    </View>
    <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true} style={styles.scrollView} >
        <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.numberArea}>
                <Text style={styles.number}>6</Text>
            </View>
            <View style={styles.containerForTopText}>
                <View style={styles.firstText}>
                    <Text style={{fontSize: 7, color: '#1E90FF', fontWeight: 'bold', padding: 5, paddingHorizontal: 10}}>НОВИНКА</Text>
                </View>
                <View style={{backgroundColor: 'white', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10}}>
                    <Icon name='time-outline'></Icon>
                    <Text style={{fontSize: 8, color: 'black', fontWeight: 'bold', padding: 5}}>ДО 16 ЯНВАРЯ</Text>
                </View>
            </View>
            <Text numberOfLines={2} style={{fontSize: 16, fontWeight: 'bold', color:'#383535', padding: 5, width: 170, paddingTop: 10, paddingLeft: 10}}>Оптом дешевле на 6 месяцев</Text>
            <View style={{backgroundColor: 'black', width: 100, height: 30, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 20, marginLeft: 10, }}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 11}}>Подробнее</Text>
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.secondItemContainer}>
            <View style={styles.numberArea}>
                <Text style={styles.number}>12</Text>
            </View>
            <View style={styles.containerForTopText}>
                <View style={styles.firstText}>
                    <Text style={{fontSize: 7, color: '#1E90FF', fontWeight: 'bold', padding: 5, paddingHorizontal: 10}}>НОВИНКА</Text>
                </View>
                <View style={{backgroundColor: 'white', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10}}>
                    <Icon name='time-outline'></Icon>
                    <Text style={{fontSize: 8, color: 'black', fontWeight: 'bold', padding: 5}}>ДО 27 НОЯБРЯ</Text>
                </View>
            </View>
            <Text numberOfLines={2} style={{fontSize: 16, fontWeight: 'bold', color:'#383535', padding: 5, width: 170, paddingTop: 10, paddingLeft: 10}}>Оптом дешевле на 12 месяцев</Text>
            <View style={{backgroundColor: 'black', width: 100, height: 30, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 20, marginLeft: 10, }}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 11}}>Подробнее</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondItemContainer}>
            <View style={styles.numberArea}>
                <Text style={styles.number}>3</Text>
            </View>
            <View style={styles.containerForTopText}>
                <View style={styles.firstText}>
                    <Text style={{fontSize: 7, color: '#1E90FF', fontWeight: 'bold', padding: 5, paddingHorizontal: 10}}>НОВИНКА</Text>
                </View>
                <View style={{backgroundColor: 'white', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10}}>
                    <Icon name='time-outline'></Icon>
                    <Text style={{fontSize: 8, color: 'black', fontWeight: 'bold', padding: 5}}>ДО 1 ЯНВАРЯ</Text>
                </View>
            </View>
            <Text numberOfLines={2} style={{fontSize: 16, fontWeight: 'bold', color:'#383535', padding: 5, width: 170, paddingTop: 10, paddingLeft: 10}}>Оптом дешевле на 3 месяца</Text>
            <View style={{backgroundColor: 'black', width: 100, height: 30, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 20, marginLeft: 10, }}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 11}}>Подробнее</Text>
            </View>
        </TouchableOpacity>

    </ScrollView>
    </>
  )
}

export default Onlyforyou

const styles = StyleSheet.create({
    icon: {
        fontSize: 20,
        color: '#383535',
        fontWeight: '100',
    },
    titlecontainer: {
        flexDirection: 'row',
         paddingTop: 20, 
         paddingLeft: 15, 
         paddingRight: 15, 
         justifyContent: 'space-between'
    },
    titletext: {
        color: '#383535', 
        fontSize: 15, 
        fontWeight: 'bold'
    },
    scrollView: {
        backgroundColor: 'white', 
        height: 160, 
        flexDirection: 'row'
    },
    itemContainer: {
        backgroundColor: '#87CEEB', 
        width: 280, 
        borderRadius: 15, 
        padding: 5, 
        marginTop: 15,
        marginLeft: 15,
        justifyContent: 'center'
    },
    secondItemContainer: {
        backgroundColor: '#87CEEB',
        width: 280, 
        borderRadius: 15, 
        padding: 5, 
        marginTop: 15,
        marginLeft: 45, 
        justifyContent: 'center'
    },
    numberArea: {
        backgroundColor: 'white',
         position: 'absolute', 
         borderTopLeftRadius: 140, 
         borderBottomLeftRadius: 140, 
         borderTopRightRadius: 25, 
         borderBottomRightRadius: 25, 
         width: 115, height: 145,
        marginLeft: 200, 
        alignSelf: 'flex-start'
    },
    number: {
        fontSize: 160, 
        fontWeight: 'bold', 
        color: '#87CEFA', 
        fontFamily: 'arial'
    },
    containerForTopText: {
        flexDirection: 'row', 
        justifyContent: 'flex-start',
         gap: 10, 
         paddingLeft: 10
    },
    firstText: {
        backgroundColor: '#FFFAFA', 
        borderRadius: 5
    }
})