import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useRoute } from "./router";
import { Provider } from "react-redux"
import { store } from "./redux/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  const routing = useRoute(false);
  if (!fontsLoaded) {
    return null;
  }

  return <Provider store={store}>
    <NavigationContainer>{routing}</NavigationContainer></Provider>;
}
