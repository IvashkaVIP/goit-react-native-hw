import React from "react";
import "react-native-gesture-handler";
import { PersistGate } from "redux-persist/integration/react";
import {persistor} from "./redux/store"

import { useFonts } from "expo-font";
import { Provider } from "react-redux"
import { store } from "./redux/store";
import Main from "./components/Main";


export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });



  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
