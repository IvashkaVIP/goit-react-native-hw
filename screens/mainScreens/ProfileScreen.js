import React, { useEffect, useState } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ImageBackground,
  StyleSheet,
  Keyboard,
  Text,
  View,
} from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
 
export default ProfileScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

 const keyboardHide = () => {
   setIsShowKeyboard(false);
   Keyboard.dismiss();
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

                <Ionicons
                  onPress={() => {
                    signOut(auth);
                    // navigation.navigate("Login");
                  }}
                  style={styles.logoutIcon}
                  name="exit-outline"
                  size={24}
                  color="#BDBDBD"
                />
                <Text style={styles.mainText}>Ім'я користувача</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

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
  logoutIcon: {
    bottom: 45,
    left: 170,
    position: "relative",
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

  bottomFieldWrap: {
    backgroundColor: "#FFFFFF",
  },
});

