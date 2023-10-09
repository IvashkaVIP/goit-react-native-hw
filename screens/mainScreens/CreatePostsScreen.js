import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import {Camera} from "expo-camera"

export const CreatePostsScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: "none" },
      headerTitle: "Створити публікацію",
      headerTintColor: "#212121",
      headerTitleStyle: { fontSize: 17, fontFamily: "Roboto-Medium" },
      headerTitleAlign: "center",
      headerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: "gray",
      },

      headerLeft: (focused, size, color) => (
        <Feather
          style={{ marginLeft: 16 }}
          onPress={() => navigation.navigate("Posts")}
          name="arrow-left"
          size={24}
          color="rgba(33, 33, 33, 0.8)"
        />
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* --------------------------------------  блок камера  */}
      <Camera style={styles.camera}>
        <TouchableOpacity onPress={() => {}} style={styles.cameraBtn}>
          <FontAwesome name="camera" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </Camera>
      {/* ------------------------------------------------------- */}

      <View style={styles.textWrap}>
        <Text style={styles.textFoto}>Завантажте фото</Text>
        <TextInput
          style={styles.textTitle}
          placeholder="Назва..."
          placeholderTextColor="#BDBDBD"
        />

        <View style={styles.textArea}>
          <TextInput
            style={{...styles.textTitle, paddingLeft: 25 }}
            placeholder="Місцевість..."
            placeholderTextColor="#BDBDBD"
          />
          <Feather
            name="map-pin"
            size={20}
            color="#BDBDBD"
            style={{ position: "absolute", bottom: 10 }}
          />
        </View>

        <TouchableOpacity
          // onPress={}
          activeOpacity={0.8}
          style={styles.publishBtn}
        >
          <Text style={styles.textPublishBtn}>Опубліковати</Text>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={deletePhoto}
          style={styles.deleteBtn}
        >
          <Feather name="trash-2" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  camera: {
    height: 267,
    width: "100%",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  cameraBtn: {
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: "white",
    opacity: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  textWrap: {
    width: "100%",
    justifyContent: "flex-start",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  textFoto: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 32,
  },
  textTitle: {
    color: "#212121",
    marginBottom: 16,
    height: 50,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#E8E8E8",
    fontSize: 16,
  },
  textArea: {
    position: "relative",
    height: 50,
    marginBottom: 32,
  },
  publishBtn: {
    marginBottom: 80,
    justifyContent: "center",
    alignItems: "center",
    height: 51,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
  },
  textPublishBtn: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  deleteBtn: {
    marginBottom: 34,
    width: 70,
    height: 40,
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
});

export default CreatePostsScreen;
