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
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { authSignUp } from "../../redux/auth/authOperations";

const initialState = {
  nickname: "",
  email: "",
  password: "",
  showPassword: false,
};

export default function RegistrationScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setState((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  };

  const handleRegisterBtnPress = () => {
    dispatch(authSignUp(state));
    setState(initialState);
  };

  const handleSubmit = () => {
    setIsShowKeyboard(false);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleFocus = () => {
    setIsShowKeyboard(true);
  };

  const handleLoginBtnPress = () => {
    navigation.navigate("Login");
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
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
                <View style={styles.avatar}>
                  <AntDesign
                    style={styles.add}
                    name="pluscircleo"
                    size={24}
                    color="black"
                  />
                </View>
                <Text style={styles.mainText}>Реєстрація</Text>
              </View>

              <View style={styles.form}>
                <TextInput
                  style={styles.input}
                  placeholder="Логін"
                  placeholderTextColor="#BDBDBD"
                  onFocus={handleFocus}
                  value={state.nickname}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, nickname: value }))
                  }
                  onSubmitEditing={handleSubmit}
                />

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
                  secureTextEntry={!state.showPassword}
                  onFocus={handleFocus}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                  onSubmitEditing={handleSubmit}
                />

                <TouchableOpacity
                  style={styles.password}
                  activeOpacity={0.75}
                  onPress={togglePasswordVisibility}
                >
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
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.75}
              onPress={handleRegisterBtnPress}
            >
              <Text style={styles.textBtn}>Зареєструватися</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.registration}>
              <Text style={styles.textRegistration}>
                Вже є акаунт?{" "}
                <Text
                  style={styles.textRegistration}
                  onPress={handleLoginBtnPress}
                >
                  Увійти
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
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
    color: "#FF6C00",
  },
  title: {
    position: "relative",
    paddingTop: 92,
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
    marginBottom: 78,
  },
  bottomFieldWrap: {
    backgroundColor: "#FFFFFF",
  },
});
