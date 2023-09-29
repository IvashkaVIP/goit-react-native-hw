import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
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
    backgroundColor: "red",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8
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
    justifyContent: "flex-start"
  },
  textFoto: {
    fontSize: 16,
    color: "#BDBDBD",
  },
});

export default CreatePostsScreen;
