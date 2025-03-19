import { View, Text, Image, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../constant/Colors';

export default function SignUp() {
return (
    <View style={{
        display:'flex',
        alignItems:'center',
        paddingTop:100,
        flex:1,
        backgroundColor:Colors.WHITE,
    }}>
    <Image source={require('./../../assets/images/logo.png')}
    style={{
        width:180,
        height:180,
    }}  
    />

    <Text style={{
        fontSize:30,
        fontFamily: 'outfit-bold',
    }}>Create New Account</Text>

    <TextInput placeholder='Full Name' style={styles.textInput} />
    </View>
    );
}

const styles = StyleSheet.create({
    textInput:{

    }
})