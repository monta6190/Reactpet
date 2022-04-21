import React from "react";
import { View,Text,StyleSheet,Button,TouchableOpacity,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/pet2logo.png";

const  WelcomeScreen = ({navigation}) => {

  return( 
    <SafeAreaView>
   <View >
   
  <View style={styles.welcome}>

<Image source={logo} style={styles.logo}/>

  </View>



  <Text style={styles.text2}>Pet<Text style={{ fontWeight: 'bold',fontSize:30,color:'#36C6C0',}}>2</Text>meet</Text>

  
 


  <View>
  <TouchableOpacity onPress={()=>navigation.navigate("SignUp")} style={styles.button}><Text style={{color:'white',marginLeft:31,fontSize:20,}}>Get started</Text></TouchableOpacity>
 
  </View>



</View>
</SafeAreaView>
  ); 

  
};
const styles = StyleSheet.create({

welcome:{
  height:'65%',
  
  
  
  borderRadius:5,
 
  
  backgroundColor: '#36C6C0',
  
},
logo:{
  width:360,
  height:320,

},
text2:{
color:'black',
marginTop:60,
marginLeft:140,
flexDirection:'row',
fontSize:24,
justifyContent:"flex-start",},
button:{

marginTop:70,
    backgroundColor:'#36C6C0',
    width:160,
    height:55,
    borderRadius:30,
    justifyContent:'center',
    marginLeft:110,
},
number: {
marginLeft:200,

  color:'#36C6C0',
},
});

export default WelcomeScreen;
