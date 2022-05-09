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

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function singup() {
    axios
      .post("http://192.168.1.15:5000/api/users/register", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => navigation.reset({
        index: 0,
        routes: [{ name: "Signin" }],
      }))
      .catch((err) => console.log(err));
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
            placeholder="  E-mail "
            onChangeText={(text) => setEmail(text)}
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

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="  Confirm password "
            placeholderTextColor="#36C6C0"
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => singup()}
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

export default SignUp;
