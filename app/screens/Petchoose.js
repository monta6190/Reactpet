import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import cattt from "../../assets/images/cattt.png";
import dog from "../../assets/images/dog.png";
const Petchoose = ({navigation}) => {
  return (
  <View>
    <Text style={{textAlign:'center',marginTop:'20%',fontSize:35,fontWeight:'500',opacity:0.7}}>Choose your pet</Text>
    <View style={styles.vieww}>
     
     <TouchableOpacity onPress={()=>navigation.navigate("HomeBar")}>
<Image source={dog} style={styles.dog}/></TouchableOpacity> 

      
<TouchableOpacity onPress={()=>navigation.navigate("PetScreen",{type:'cat'})}>
<Image source={cattt} style={styles.cattt}/></TouchableOpacity>

      
     
<Text style={styles.text}>Other</Text>
     
    

    
    </View>
    </View>
  )
}

export default Petchoose

const styles = StyleSheet.create({
  text:{
top:60,
margin:10,
  },

vieww:{
  flexDirection:'row',
justifyContent:'center',
height:150,
marginHorizontal:20,
justifyContent:'space-around',
top:'60%',
backgroundColor: '#36C6C0',
borderRadius:10,
},

cattt:{
  width:115,
  height:140,
  top:5,
  borderWidth:2,
  borderColor:'white',
},
dog:{
  top:5,
width:115,
height:140,
borderWidth:2,
borderColor:'white',
},



})