import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { FontAwesome, Ionicons, AntDesign, Feather } from "@expo/vector-icons";

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
      <View style={styles.contentBlock}>
        <View style={styles.cameraWrap}>
          <FontAwesome name="camera" size={24} color="#BDBDBD" />
        </View>
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.textFoto}>Завантажте фото</Text>
        <TextInput
          style={styles.textTitle}
          placeholder="Назва..."
          placeholderTextColor="#BDBDBD"
        />

        <View style={styles.textArea}>
          <TextInput
            style={{ fontSize: 16, paddingLeft: 25, paddingTop: 16 }}
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
  contentBlock: {
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
  cameraWrap: {
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: "white",
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
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginBottom: 32,
  },
  textTitle: {
    color: "#BDBDBD",
    marginBottom: 16,
    height: 50,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#E8E8E8",
    fontSize: 16,
  },
  textArea: {
    position: "relative",
    color: "#BDBDBD",
    height: 50,
    marginBottom: 32,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#E8E8E8",
    fontSize: 16,
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
