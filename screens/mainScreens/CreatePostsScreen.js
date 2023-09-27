import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";


export const CreatePostsScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: "none" },
      headerTitle: "Створити публікацію",
      headerTintColor: "#212121",
      headerTitleStyle: { fontSize: 17, fontFamily: "Roboto-Medium" },
      headerTitleAlign: "center",
      headerLeft: (focused, size, color) => (
          <Feather
            style={{ marginLeft: 16, }}
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
      <Text>CreatePostsScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreatePostsScreen;
