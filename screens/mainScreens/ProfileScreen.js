import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import {
  KeyboardAvoidingView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  } from "react-native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
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
                  navigation.navigate("Login");
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
    // </TouchableWithoutFeedback>
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

export default ProfileScreen;
