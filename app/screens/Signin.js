import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import petl from "../../assets/images/pet2logo.png";
  import axios from "axios";
  import { SafeAreaView } from "react-native-safe-area-context";
  
  import Inputs from "./Inputs";
  import Petchoose from "./Petchoose";
import { storeUserData } from "../utils/AsyncStorageFunctions";
  
  const Signin = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    function sign() {
      axios
        .post("http://192.168.1.15:5000/api/users/login", {
          username: username,
          password: password,
        })
        .then((res) => { storeUserData(res.data).then(()=>navigation.reset({
            index: 0,
            routes: [{ name: "tabnav" }],
          })) })
        .catch((err) => console.log(err.response));
    }
  
    return (
      <SafeAreaView>
        <View>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="  Name"
              onChangeText={(text) => setUsername(text)}
              placeholderTextColor="#36C6C0"
              autoCapitalize="none"
            />
  
       
  
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="  Password "
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor="#36C6C0"
              autoCapitalize="none"
            />
  
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => sign()}
          >
            <Text style={styles.submitButtonText}> Next </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  const styles = StyleSheet.create({
    submitButton: {
      backgroundColor: "#36C6C0",
      padding: 10,
      margin: 15,
      height: 40,
      borderRadius: 50,
      width: 80,
    },
    input: {
      margin: 15,
      height: 40,
      borderColor: "#36C6C0",
      borderWidth: 1,
      borderRadius: 10,
    },
    submitButtonText: {
      color: "white",
      borderRadius: 10,
    },
  });
  
  export default Signin;
  