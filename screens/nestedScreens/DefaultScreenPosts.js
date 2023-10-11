import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) setPosts((prevState) => [...prevState, route.params]);
  }, [route.params]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Публікації",
      headerTintColor: "#212121",
      headerTitleStyle: { fontSize: 17, fontFamily: "Roboto-Medium" },
      headerTitleAlign: "center",
      headerStyle: {
        borderBottomWidth: 1,
        borderColor: "#BDBDBD",
      },
      headerLeft: () => null,
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

  return (
    <View style={styles.container}>
      {/* ---------------------------------------------------- authUser */}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          marginBottom: 32,
        }}
      >
        <Image
          style={{ width: 60, height: 60, borderRadius: 16, marginRight: 8 }}
          source={require("../../assets/images/avatar.jpg")}
        />
        <View>
          <Text style={{ fontSize: 13, fontWeight: "bold" }}>
            Natali Romanova
          </Text>
          <Text style={{ fontSize: 11 }}>email@example.com</Text>
        </View>
      </View>
      {/* ---------------------------------------------------------------- */}
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 32 }}>
            <Image source={{ uri: item.url }} style={styles.image} />
            <Text style={styles.textPhoto}>{item.name}</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              {/* -----------------------------------------  Comments */}
              <View style={{ flexDirection: "row" }}>
                <Feather
                  name="message-circle"
                  size={24}
                  color="#BDBDBD"
                  style={{
                    marginRight: 10,
                  }}
                  onPress={() => navigation.navigate("Comments")}
                />
                <Text style={styles.textPhoto}>0</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Feather
                  name="map-pin"
                  size={24}
                  color="#BDBDBD"
                  style={{ marginRight: 10 }}
                />
                <Text
                  style={{
                    ...styles.textPhoto,
                    textDecorationLine: "underline",
                  }}
                  onPress={() => navigation.navigate("Map")}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 32,
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

export default DefaultScreenPosts;