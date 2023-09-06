import React from "react";
import { useState } from "react";
import { useFonts } from "expo-font";
import {StyleSheet } from "react-native";
import LoginScreen from "./screens/auth/LoginScreen";
import RegistrationScreen from "./screens/auth/RegistrationScreen";

export default function App() {
   const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
   if (!fontsLoaded) {
     return null;
   }

      
  return (
    <LoginScreen />   
    // <RegistrationScreen />
  );
}
