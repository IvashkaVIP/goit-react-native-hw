import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { authSignOutUser } from "../../redux/auth/authOperations";
import { doc, updateDoc, getDocs, collection } from "firebase/firestore";
import { db, auth } from "../../firebase/config";
import { getUserEmail, getUserNick } from "../../redux/auth/authSelectors";

const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const nickName = useSelector(getUserNick);
  const email = useSelector(getUserEmail);
  const signOut = () => {
    dispatch(authSignOutUser());
  };

  const getAllPosts = async () => {
    try {
      const snapshot = await getDocs(collection(db, "posts"));
      const documents = await Promise.all (
        snapshot.docs.map(async (doc) => {
          const comments = (
            await getDocs(collection(db, `posts/${doc.id}/comments`))
          ).size ?? 0;
          return {
            id: doc.id,
            ...doc.data(),
            comments,
          };
        })
      );

      setPosts(documents);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    getAllPosts();
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
          onPress={signOut}
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
      <View style={styles.wrapperUserInfo}>
        <Image
          style={styles.userAvatar}
          source={require("../../assets/images/AvatarDefault.jpg")}
        />
        <View>
          <Text style={{ fontSize: 13, fontWeight: "bold" }}>{nickName}</Text>
          <Text style={{ fontSize: 11 }}>{email}</Text>
        </View>
      </View>
      {/* ----------------------------------------------------------PostsList */}
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 32 }}>
            <Image source={{ uri: item.photo }} style={styles.image} />
            <Text style={styles.textPhoto}>{item.name}</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              {/* -----------------------------------------  Comments */}
              <View style={{ flexDirection: "row" }}>
                <Feather
                  name="message-circle"
                  size={24}
                  color= { item.comments ? "#FF6C00" : "#BDBDBD"  }
                  style={{
                    marginRight: 10,
                  }}
                  onPress={() =>
                    navigation.navigate("Comments", {
                      postId: item.id,
                      imageUrl: item.photo,
                    })
                  }
                />
                <Text style={styles.textPhoto}>{item.comments}</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Feather
                  name="map-pin"
                  size={24}
                  color="#BDBDBD"
                  style={{ marginRight: 10 }}
                  onPress={() => navigation.navigate("Map", posts)}
                />
                <Text
                  style={{
                    ...styles.textPhoto,
                    textDecorationLine: "underline",
                  }}
                  onPress={() => navigation.navigate("Map", posts)}
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
  wrapperUserInfo: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginBottom: 32,
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
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
