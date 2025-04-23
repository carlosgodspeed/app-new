import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { UserDetailContext } from '../context/UserDetailContext';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {

    const { userDetail, setUserDetail } = useContext(UserDetailContext);

    console.log("userDetail no Header:", userDetail);

    return (
        <View style={{
            display:'flex',
        }}>
            <View>
                <Text style={{
                    fontFamily:'outfit-bold',
                    fontSize: 25
                }}> Hello, {userDetail?.name}</Text>
            
                <Text style={{
                    fontFamily:'outfit',
                    fontSize:17,
                    paddingLeft: 4,
                }}>Let's Get Started</Text>
            </View>
            <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color="black"/>
            </TouchableOpacity>
        </View>
    )
}