import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Tablayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home"
      options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
        tabBarLabel: 'Home'
      }}
      />
      <Tabs.Screen name="explore"
      options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="search-outline" size={size} color={color} />,
        tabBarLabel: 'Explore'
      }}
      />
      <Tabs.Screen name="progresso"
      options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="analytics-outline" size={size} color={color} />,
        tabBarLabel: 'Progresso'
      }}
      />
      <Tabs.Screen name="perfil"
      options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="person-circle-outline" size={size} color={color} />,
        tabBarLabel: 'Perfil'
      }}
      />
    </Tabs>
  )
}