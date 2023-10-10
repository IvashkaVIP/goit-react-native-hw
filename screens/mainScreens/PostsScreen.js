import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
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

  console.log("77777777777777777777777777777777                      ",posts[0]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{marginBottom: 32}}>
            <Image source={{ uri: item.url }} style={styles.image} />
            <Text style={styles.textPhoto}>{item.name}</Text>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row" }}>
                <Feather
                  name="message-circle"
                  size={24}
                  color="#BDBDBD"
                  style={{
                    marginRight: 10,
                  }}
                />
                <Text style={styles.textPhoto}>0</Text>
              </View>

              <View style={{flexDirection: "row"}}>
              <Feather
                name="map-pin"
                size={24}
                color="#BDBDBD"
                style={{ marginRight: 10 }}
              />
              <Text style={{...styles.textPhoto, textDecorationLine: "underline"}}>
                {item.description}
                </Text>
                </View>
            </View>
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
    alignItems: "center",
    backgroundColor: "aqua",
    paddingHorizontal: 16,
  },
  image: {
    width: 343,
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
  },
  textPhoto: {
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 8,
  },
});
