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
import { useDispatch } from "react-redux";
import { authSignIn } from "../../redux/auth/authOperations";
import Error from "../../components/Utils/error";

const initialState = {
  email: "",
  password: "",
  showPassword: false,
};

export default function LoginScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isFocused, setIsFocused] = useState("");
  const [error, setError] = useState("");
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();

  const resetError = () => {
    setError('');
  };

  const handleLoginBtnPress = async () => {
    try {
      await dispatch(authSignIn(state));
      setState(initialState);
    } catch (er) {      
      setError(er.message);
    }
  };  
  
  const togglePasswordVisibility = () => {
    setState((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  };
  
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    setIsShowKeyboard(false);
  };

  const handleRegisterBtnPress = () => {
    navigation.navigate("Registration");
  };

  const handleFocus = (name) => {
    setIsShowKeyboard(true);
    setIsFocused(name);
  };

  const handleBlur = () => {
    setIsFocused("");
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
                <Text style={styles.mainText}>Увійти</Text>
              </View>

              <View style={styles.form}>
                <TextInput
                  style={[
                    styles.input,
                    {
                      borderColor:
                        isFocused === "email" ? "#FF6C00" : "#BDBDBD",
                    },
                  ]}
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  onSubmitEditing={handleSubmit}
                />

                <TextInput
                  style={[
                    styles.input,
                    {
                      borderColor:
                        isFocused === "password" ? "#FF6C00" : "#BDBDBD",
                    },
                  ]}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry={!state.showPassword}
                  onFocus={() => handleFocus("password")}
                  onBlur={handleBlur}
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
          {error && <Error errorMessage={error} resetError={resetError} />}
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
