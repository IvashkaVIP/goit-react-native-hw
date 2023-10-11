import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import CreatePostsScreen from "./CreatePostsScreen";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";

import { AntDesign, Feather } from "@expo/vector-icons";

const HomeTabs = createBottomTabNavigator();

function tabBarIsVisible(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Default";
  if (routeName === "Map" || routeName === "Comments")
    return { display: "none" };
  return  styles.tabDecoration;
}

export default function Home() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <HomeTabs.Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
        tabBarActiveTintColor: "rgba(255, 00, 00, 0.8)",
        tabBarStyle: styles.tabDecoration,
      })}
    >
      <HomeTabs.Screen
        options={({ route }) => ({
          tabBarStyle : tabBarIsVisible(route),
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="appstore-o" size={24} color="#212121" />
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
          tabBarIcon: ({ focused, size, color }) => {
            return <Feather name="user" size={24} color="#212121" />;
          },
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
  tabDecoration: {
    paddingBottom: 34,
    paddingHorizontal: 60,
    height: 83,
    borderTopColor: "#BDBDBD",
    borderTopWidth: 1,
  },
});
