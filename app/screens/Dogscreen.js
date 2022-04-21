import { View, Text,TextInput,Image,TouchableOpacity,StyleSheet } from 'react-native';
import React,{useState,useEffect} from 'react';
import petl from "../../assets/images/pet2logo.png";
import axios from 'axios';
import { SafeAreaView } from "react-native-safe-area-context";

import AnimalInput from './AnimalInput';
import Petchoose from './Petchoose';




const Dogscreen = ({navigation}) => {
  





  
  return (
    <SafeAreaView>
    <View>
     
<AnimalInput/>
<TouchableOpacity style = {styles.submitButton} onPress={()=>navigation.navigate('Petchoose')}>
              
              
              <Text style = {styles.submitButtonText}>    Next </Text>
           </TouchableOpacity>
</View>
</SafeAreaView>
  );
};
const styles=StyleSheet.create ({

  submitButton: {
    backgroundColor: '#36C6C0',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius:50,
    width:80,

 },
 submitButtonText:{
    color: 'white',
    borderRadius:10,

 }


});

export default Dogscreen;