import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import CreatePostsScreen from "./CreatePostsScreen";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";

const HomeStack = createStackNavigator();

export default function Home() { 
    const navigation = useNavigation();

    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Posts" component={PostsScreen} />
        <HomeStack.Screen name="CreatePosts" component={CreatePostsScreen} />
        <HomeStack.Screen name="Profile" component={ProfileScreen} />
      </HomeStack.Navigator>
    );

}