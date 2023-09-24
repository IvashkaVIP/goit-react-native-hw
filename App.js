import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import { useState } from "react";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import LoginScreen from "./screens/auth/LoginScreen";
import RegistrationScreen from "./screens/auth/RegistrationScreen";
import CreatePostsScreen from "./screens/CreatePostsScreen";
import PostsScreen from "./screens/PostsScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="Registration">
        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen name="Post" component={PostsScreen} />
        <AuthStack.Screen name="CreatePosts" component={CreatePostsScreen} />
      </AuthStack.Navigator>

      {/* <LoginScreen />
      {/* // <RegistrationScreen />
      // <PostsScreen /> */}
    </NavigationContainer>
  );
}
