import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
// import { Image } from "expo-image";

export default function PostsScreen({ route }) {
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params) setPosts((prevState) => [...prevState, route.params]);
  }, [route.params]);

  useEffect(() => {
    navigation.setOptions({
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
    });
  }, []);

  // console.log(posts[0].urlPhoto);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Image source={{uri : item.urlPhoto}} style={{width: 100, height: 100,}} />
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
});
