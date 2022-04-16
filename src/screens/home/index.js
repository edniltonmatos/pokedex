import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';

import 'poke'

export default function Home(){
    return(
      <View style={styles.container}>
        <Image style={styles.img} source={require('.../assets/Pokeball.png')} />
        <Text>teste</Text>
        <StatusBar style='auto' />  
      </View>
    )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#c4c4c4',
  },
  img:{
    height: 128,
    width: 128,
  }
})