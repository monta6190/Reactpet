import React from "react";
import { View, Text, StyleSheet } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./app/screens/SignUp";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SafeAreaView } from "react-native-safe-area-context";
import Petchoose from "./app/screens/Petchoose";
import Catscreen from "./app/screens/Catscreen";
import Dogscreen from "./app/screens/Dogscreen";
import PetScreen from "./app/screens/PetScreen";
import HomeScreen from "./app/screens/HomeScreen";
import Search from "./app/screens/Search";
const App = () => {
  const Tab = createBottomTabNavigator();

  function Homestack() {
    return (  <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>);
  }
  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="home" component={Homestack} />
        <Tab.Screen name="search" component={Search} />
      </Tab.Navigator>
    );
  }


  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ title: "" }}
          />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="PetScreen" component={PetScreen} />
          <Stack.Screen name="Petchoose" component={Petchoose} />
          <Stack.Screen name="Catscreen" component={Catscreen} />
          <Stack.Screen name="Dogscreen" component={Dogscreen} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen
            options={{ headerShown: false }}
            name="tabnav"
            component={MyTabs}
          />

          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
  },
});

export default App;
