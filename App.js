import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewPlatform,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SVGImg from "./assets/images/add.svg";

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
      
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/PhotoBG.jpg")}
        style={styles.imageBcg}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keybView}
        >
          <View style={styles.content}>
            <View style={styles.title}>
              <View style={styles.avatar}>
                <SVGImg style={styles.add} />
              </View>
              <Text style={styles.text}>Реєстрація</Text>
            </View>

            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Логін"
                placeholderTextColor="#BDBDBD"
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                onSubmitEditing={() => {
                  setIsShowKeyboard(false);
                }}
              />

              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                placeholderTextColor="#BDBDBD"
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                onSubmitEditing={() => {
                  setIsShowKeyboard(false);
                }}
              />

              <TextInput
                style={styles.input}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                secureTextEntry={true}
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                onSubmitEditing={() => {
                  setIsShowKeyboard(false);
                }}
              />

              <TouchableOpacity style={styles.password} activeOpacity={0.75}>
                <Text style={styles.showPassword}>Показати</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>

        <View
          style={{
            ...styles.bottomFieldWrap,
            marginBottom: isShowKeyboard ? 70 : 0,
          }}
        >
          <TouchableOpacity style={styles.btn} activeOpacity={0.75}>
            <Text style={styles.textBtn}>Зареєструватися</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registration}>
            <Text style={styles.textRegistration} activeOpacity={0.75}>
              Вже є акаунт? Увійти
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {/* // <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  // keybView: {
  //   marginBottom: 70,

  // },
  // keyboardView: {
  //   flex: 1,
  //   justifyContent: "flex-end",
  // },
  container: {
    flex: 1,
  },
  // isKeyboardView: {
  //   flex: 1,
  //   resizeMode: "cover",
  //   justifyContent: "center",
  // },
  imageBcg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  content: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    // borderWidth: 3, // --------------------------------------
    // borderBlockColor: "green", // -----------------------------

    // justifyContent: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
    position: "absolute",

    bottom: 100,
    justifyContent: "flex-end",
    alignItems: "flex-end",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.75,
    shadowRadius: 4,
    elevation: 4,
  },
  add: {
    width: 25,
    height: 25,

    position: "relative",
    bottom: 16,
    left: 12,
  },
  title: {
    position: "relative",
    paddingTop: 92,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  text: {
    marginBottom: 32,
    color: "#212121",
    fontSize: 30,
    fontWeight: "500",
  },
  form: {
    marginHorizontal: 16,

    // borderWidth: 3, // --------------------------------------
    // borderBlockColor: "red", // -----------------------------
  },
  input: {
    marginBottom: 26,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    height: 50,
    padding: 16,
    fontSize: 16,
  },
  password: {
    position: "relative",
    alignItems: "flex-end",
    marginRight: 16,
  },
  showPassword: {
    position: "absolute",
    bottom: 40,
    color: "#1B4371",
    fontSize: 16,
  },
  btn: {
    marginTop: 46,
    marginHorizontal: 16,
    backgroundColor: "#FF6C00",
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  registration: {
    marginTop: 16,
    alignItems: "center",
    marginHorizontal: 16,
  },
  textRegistration: {
    color: "#1B4371",
    fontSize: 16,
    marginBottom: 78,
  },
  bottomFieldWrap: {
    backgroundColor: "#FFFFFF",
    // marginBottom: 70,
  },
});
