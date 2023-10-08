import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PostsScreen () {
  const navigation = useNavigation();

  useEffect(()=>{navigation.setOptions({
    headerTitle: "Публікації",
    headerTintColor: "#212121",
    headerTitleStyle: { fontSize: 17, fontFamily: "Roboto-Medium" },
    headerTitleAlign: "center",
    headerRight: () => (
      <Ionicons
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={{ marginRight: 10 }}
        name="exit-outline"
        size={24}
        color="#BDBDBD"
      />
    ),
  });},[])
     
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

