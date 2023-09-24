import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

const PostsScreen = () => {
  const navigation = useNavigation();

  navigation.setOptions({
    headerTitle: "Публікації",
    headerTintColor: "#212121",
    headerTitleStyle: { fontSize: 17, fontFamily: "Roboto-Medium" },
    headerTitleAlign: "center",
      headerRight: () => (
          <Ionicons
            onPress={() => { navigation.navigate("Login"); }}

        style={{marginRight: 10}}
        name="exit-outline"
        size={24}
        color="#BDBDBD"
      />
    ),
  });

  return (
    <View style={styles.container}>
      <Text>PostsScreen</Text>
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
export default PostsScreen;
