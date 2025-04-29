import { View, Text, Platform } from 'react-native';
import Colors from './../constant/Colors';
import React from 'react';
import Header from '../Home/Header';
import Cursos from '../Cursos/Cursos';

export default function Home() {
  return (
    <View style={{
    padding:25,
    paddingTop:Platform.OS=='ios' && 45,
    flex:1,
    backgroundColor: Colors.WHITE
    }}>
      <Header />
      <Cursos />
    </View>
  )
}