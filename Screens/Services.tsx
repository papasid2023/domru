import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { ServicesInside } from './Main/ServicesInside';
import Icon from 'react-native-vector-icons/Ionicons';
import { FIREBASE_AUTH } from '../firebaseConfig';
import { useMMKV, useMMKVNumber } from 'react-native-mmkv';


const Services = () => {

  const auth = FIREBASE_AUTH;

  const CurrentUserEmail = auth.currentUser?.email;

  const storage = useMMKV({id: `user-${CurrentUserEmail}-storage`});

  const [count, setGetCountRead] = useState(storage.getNumber('countRead'));

  const Do = () => {
    try {
      setGetCountRead(count + 1);
      storage.set('countRead', count + 1);
      console.log('Число теперь', count + 1);
      console.log('А число в стораже', storage.getNumber('countRead'));
    } catch (error) {
      console.log(error)
    }
  }

    return (

    
      
        <ScrollView style={styles.scrollview} showsHorizontalScrollIndicator={false} horizontal={true}>
          <SafeAreaView>
            <Text>Вы нажали кнопки {count} раз</Text>
          </SafeAreaView>
          
          {ServicesInside.map((item) => {
            return (
              <SafeAreaView>
                <TouchableOpacity style={styles.firstblock} key={item.id} onPress={Do}>
                  <View style={styles.bodyelement}>
                    <Icon style={styles.icon} name={item.icon} />
                    <Image style={styles.image} source={require('../Src/Images/pl-card.png')}></Image>
                  </View>
                  <Text style={styles.textforblock}>{item.title}</Text>
                  <Text style={styles.textforblock}>{item.countermessages}</Text>
                  <Text style={styles.descriptionblock}>{item.description}</Text>
              </TouchableOpacity>
            </SafeAreaView>
            )
          }
      )}
        </ScrollView>
      
  );
};

export default Services

const styles = StyleSheet.create({
  firstblock: {
    backgroundColor: '#edf8fa', 
    width: 130, 
    height: 110, 
    borderRadius: 15, 
    padding: 5, 
    marginTop: 15, 
    marginLeft: 15, 
    justifyContent: 'center',
    shadowColor: 'orange',
    shadowOpacity: 0.6,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: -5}
  },
  scrollview: {
    backgroundColor: 'white',
    flex: 1,
},
  textforblock: {
    fontSize: 10, 
    fontWeight: 'bold', 
    color:'#383535', 
    paddingLeft: 5,
    paddingTop: 2,
    paddingBottom: 2
  },
  descriptionblock: {
    fontSize: 9, 
    width: 120, 
    paddingLeft: 5, 
    color: 'grey', 
    fontWeight: 500
  },
  icon: {
    fontSize: 15,
    color: 'white',
    position: 'absolute',
  },
  bodyelement: {
    backgroundColor: '#008080', 
    width: 30, 
    height: 30, 
    borderRadius: 25, 
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 5,
    marginTop: 20,
  },
  image: {
    width: 60,
    height: 40,
    marginBottom: 70,
    marginLeft: 100
  }
})