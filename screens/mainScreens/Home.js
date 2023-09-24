import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

const MainTab = createBottomTabNavigator();

import CreatePostsScreen from "./CreatePostsScreen";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";

export default function Home ({navigation}) {
  return (
      <MainTab.Navigator
        screenOptions={{ tabBarShowLabel: false, tabBarActiveTintColor: 'blue' }}
      >
        <MainTab.Screen
          options={{
            tabBarIcon: (focused, color, size) => (
              <AntDesign
                // style={styles.footerIconApp}
                name="appstore-o"
                size={24}
                color={color}
              />
            ),
          }}
          name="Posts"
          component={PostsScreen}
        />
        <MainTab.Screen
          options={{
            tabBarIcon: (focused, color, size) => (
              <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.75}
                  onPress={() => navigation.navigate('CreatePosts')}
              >
                <Feather name="plus" size={13} color={color} />
              </TouchableOpacity>
            ),
          }}
          name="CreatePosts"
          component={CreatePostsScreen}
        />
        <MainTab.Screen
          options={{
            tabBarIcon: (focused, color, size) => (
              <Feather name="user" size={24} color={color} />
            ),
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </MainTab.Navigator>
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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




