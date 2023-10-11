import React from "react";
import {moduleName} from "@react-navigation/stack"

import DefaultScreenPosts from "../nestedScreens/DefaultScreenPosts";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";

import { createStackNavigator } from "@react-navigation/stack";

const nestedScreens = createStackNavigator();

function PostsScreen() {
  return (
    <nestedScreens.Navigator>
      <nestedScreens.Screen name="Default" component={DefaultScreenPosts} />
      <nestedScreens.Screen name="Comments" component={CommentsScreen} />
      <nestedScreens.Screen name="Map" component={MapScreen} />
    </nestedScreens.Navigator>
  );
}

export default PostsScreen;