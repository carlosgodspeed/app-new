import { View, Text, Image } from 'react-native';
import React from 'react';

export default function Cursos() {
  return (
    <View style={{
        marginTop:40,
        display:'flex',
        alignItems:'center',
    }}>
        <Image source={require('../../assets/images/book.png')}
        style={{
            height:200,
            width:200,
        }}
        />
        <Text> Você não tem Nenhum Curso</Text>
    </View>
  )
}