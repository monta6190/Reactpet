import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

const PetScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ justifyContent: "center", alignContent: "center" }}>
        <Text>{route.params.type}</Text>
        <View>
          <ImageBackground
            style={{}}
            resizeMode="stretch"
            source={
              route.params.type == "dog"
                ? {
                   
                  }
                : {
                    
                  }
            }
          >
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="  Pet's name"
              placeholderTextColor="#36C6C0"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="  Race "
              placeholderTextColor="#36C6C0"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="  Age "
              placeholderTextColor="#36C6C0"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="  gender "
              placeholderTextColor="#36C6C0"
              autoCapitalize="none"
            />
            {route.params.type == "dog" ? (
              <Text>dog page</Text>
            ) : (
              <Text>cat page</Text>
            )}
          </ImageBackground>
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate("Search")}
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
  submitButtonText: {
    color: "white",
    borderRadius: 10,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#36C6C0",
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  upload: {
    width: 80,
    height: 80,
  },
});

export default PetScreen;
