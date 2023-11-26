import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ImageBackground,
  StyleSheet,
  Keyboard,
  Text,
  View,
  Image,
} from "react-native";
import { auth } from "../../firebase/config";
import { authSignOutUser } from "../../redux/auth/authOperations";
import { getUserNick } from "../../redux/auth/authSelectors";

export default ProfileScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const nickName = useSelector(getUserNick);
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(authSignOutUser());
  };

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
                <View style={styles.containerAvatar}>
                  <Image
                    style={styles.imageAvatar}
                    source={require("../../assets/images/AvatarDefault.jpg")}
                  />
                  <View style={styles.containerAddIcon}>
                    <AntDesign
                      style={styles.addIcon}
                      name="pluscircleo"
                      size={24}
                      color="black"
                    />
                  </View>
                </View>

                <Ionicons
                  onPress={signOut}
                  style={styles.logoutIcon}
                  name="exit-outline"
                  size={24}
                  color="#BDBDBD"
                />
                <Text style={styles.mainText}>{nickName}</Text>
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
    paddingTop: 77,
  },
  content: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  containerAvatar: {
    width: 120,
    height: 120,
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
    position: "absolute",
    top: -60,    
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.75,
    shadowRadius: 4,
    elevation: 4,
  },
  imageAvatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 16,
  },
  containerAddIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 14,
    right: -12,
    backgroundColor: "white",
    borderRadius: 100,
  },
  addIcon: { color: "#FF6C00" },
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
