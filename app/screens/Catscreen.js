
import React from 'react';
import AnimalInput from './AnimalInput';
import { View, Text,TextInput,Image,TouchableOpacity,StyleSheet } from 'react-native';
const Catscreen = () => {
  return (
    <View>
     <AnimalInput />
     <TouchableOpacity style = {styles.submitButton} onPress={()=>navigation.navigate('Petchoose')}>
              
              
              <Text style = {styles.submitButtonText}>    Next </Text>
           </TouchableOpacity>
    </View>
  );
};

export default Catscreen;

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