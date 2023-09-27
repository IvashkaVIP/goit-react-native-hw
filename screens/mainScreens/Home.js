import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation, useRoute } from "@react-navigation/native";

import CreatePostsScreen from "./CreatePostsScreen";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";

import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

const HomeStack = createStackNavigator();
const HomeTabs = createBottomTabNavigator();

export default function Home() {
  const navigation = useNavigation();
  const route = useRoute();
  
  return (
  
       <HomeTabs.Navigator
          screenOptions={() => ({
            tabBarShowLabel: false,
            tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
            tabBarActiveTintColor: "rgba(255, 00, 00, 0.8)",

            tabBarStyle: {
              paddingTop: 9,
              paddingHorizontal: 60,
              height: 83,
              borderTopColor: "#BDBDBD",
              borderTopWidth: 1,
            },
          })}
        >
          <HomeTabs.Screen
            options={({ route }) => ({
              tabBarIcon: ({ focused, size, color }) => (
                <AntDesign
                  // style={styles.footerIconApp}
                  name="appstore-o"
                  size={24}
                  color="#212121"
                />
              ),
            })}
            name="Posts"
            component={PostsScreen}
          />

          <HomeTabs.Screen
            options={({ route }) => ({
              tabBarIcon: ({ focused, size, color }) => (
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.75}
                  onPress={() => {
                    
                    navigation.navigate("CreatePosts");                  
                    
                  }}
                >
                  <Feather name="plus" size={13} color="#FFFFFF" />
                </TouchableOpacity>
              ),
            })}
            name="CreatePosts"
            component={CreatePostsScreen}
          />
          <HomeTabs.Screen
            options={({ route }) => ({
              tabBarIcon: ({ focused, size, color }) => (
                <Feather name="user" size={24} color="#212121" />
              ),
            })}
            name="Profile"
            component={ProfileScreen}
          />
        </HomeTabs.Navigator>
          
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 5,
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
