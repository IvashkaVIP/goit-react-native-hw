import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const initialState = {
  email: '',
  password: '',
}

export default function LoginScreen({navigation}) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  // const navigation = useNavigation();
  
  const keybordHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  }

  const handleFocus = () => {
    setIsShowKeyboard(true);    
  };

  const handleSubmit = () => {
    setIsShowKeyboard(false);    
    
  }

  const handleLoginBtnPress = () => {
    console.log("LoginBtnPress >>>>>> ");
    console.log(state);
    setState(initialState);
    navigation.navigate("Home");
    
  };

  const handleRegisterBtnPress = () => {
    console.log("RegistrationBtnPress >>>>>> ");
    navigation.navigate("Registration");
  };

  return (
    <TouchableWithoutFeedback onPress={keybordHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/PhotoBG.jpg")}
          style={styles.imageBcg}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keybView}
          >
            <View style={styles.content}>
              <View style={styles.title}>
                <Text style={styles.mainText}>Увійти</Text>
              </View>

              <View style={styles.form}>
                <TextInput
                  style={styles.input}
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor="#BDBDBD"
                  onFocus={handleFocus}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  onSubmitEditing={handleSubmit}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry={true}
                  onFocus={handleFocus}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                  onSubmitEditing={handleSubmit}
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
              marginBottom: isShowKeyboard ? 26 : 0,
            }}
          >
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.75}
              onPress={handleLoginBtnPress}
            >
              <Text style={styles.textBtn}>Увійти</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.registration}>
              <Text style={styles.textRegistration}>
                Немає акаунту?{" "}
                <Text
                  style={styles.textRegistration}
                  activeOpacity={0.5}
                  onPress={handleRegisterBtnPress}
                >
                  Зареєструватися
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        {/* // <StatusBar style="auto" /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBcg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  content: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  mainText: {
    fontFamily: "Roboto-Medium",
    marginBottom: 32,
    color: "#212121",
    fontSize: 30,
    fontWeight: "500",
  },
  form: {
    marginHorizontal: 16,
    //   paddingBottom: 80,
    //   marginBottom: 56,
  },
  input: {
    marginBottom: 26,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    height: 50,
    padding: 16,
    fontFamily: "Roboto-Regular",
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
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  btn: {
    marginTop: 17,
    marginHorizontal: 16,
    backgroundColor: "#FF6C00",
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  registration: {
    marginTop: 16,
    alignItems: "center",
    marginHorizontal: 16,
  },
  textRegistration: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginBottom: 144,
  },
  bottomFieldWrap: {
    backgroundColor: "#FFFFFF",
  },
});
