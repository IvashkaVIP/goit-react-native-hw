import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CreatePostsScreen from "./CreatePostsScreen";
// import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";

export default function PostsScreen () {
  const navigation = useNavigation();

  useEffect(()=>{navigation.setOptions({
    headerTitle: "Публікації",
    headerTintColor: "#212121",
    headerTitleStyle: { fontSize: 17, fontFamily: "Roboto-Medium" },
    headerTitleAlign: "center",
    headerRight: () => (
      <Ionicons
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={{ marginRight: 10 }}
        name="exit-outline"
        size={24}
        color="#BDBDBD"
      />
    ),
  });},[])
  
   
  return (
    <View style={styles.container}>
      <Text>PostsScreen</Text>
    </View>
  );
    
      

      /* <MainTab.Navigator>
        screenOptions=
        {{
          tabBarShowLabel: false,
          tabBarStyle: { height: 83 },
        }}
        
        <MainTab.Screen
          options={{
            tabBarIcon: (focused, color, size) => (
              
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
                onPress={() => navigation.navigate("CreatePosts")}
              >
                <Feather name="plus" size={13} color="#FFFFFF" />
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
      </MainTab.Navigator> */
    
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

