import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from './Main/Header'
import Stories from './Main/Stories'
import Options from './Main/Options'
import CardCashback from './Main/CardCashback'
import Onlyforyou from './Main/Onlyforyou'

const Main = () => {

  return (
    <ScrollView  style={{backgroundColor: 'white'}}>
    <>
    <Header />
    <Stories />
    <Options />
    <CardCashback />
    <Onlyforyou />
    </>
    </ScrollView>
  )
}

export default Main

const styles = StyleSheet.create({})