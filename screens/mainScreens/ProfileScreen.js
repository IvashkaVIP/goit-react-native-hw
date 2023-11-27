import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Ionicons,
  AntDesign,
  Feather,
  SimpleLineIcons,
} from "@expo/vector-icons";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ImageBackground,
  StyleSheet,
  Keyboard,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import { authSignOutUser } from "../../redux/auth/authOperations";
import { getUserNick, getUserId } from "../../redux/auth/authSelectors";
import { db } from "../../firebase/config";
import { getDocs, collection, query, where } from "firebase/firestore";

export default ProfileScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  const nickName = useSelector(getUserNick);
  const userId = useSelector(getUserId);
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(authSignOutUser());
  };

  const getUserPosts = async () => {
    try {
      const snapshot = await getDocs(
        query(collection(db, "posts"), where("userId", "==", userId))
      );
      const documents = await Promise.all(
        snapshot.docs.map(async (doc) => {
          const comments =
            (await getDocs(collection(db, `posts/${doc.id}/comments`))).size ??
            0;
          return {
            id: doc.id,
            ...doc.data(),
            comments,
          };
        })
      );

      setUserPosts(documents);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    getUserPosts();
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/PhotoBG.jpg")}
          style={styles.imageBcg}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keybView}
          >
            <View style={styles.content}>
              <View style={styles.title}>
                <View style={styles.containerAvatar}>
                  <Image
                    style={styles.imageAvatar}
                    source={require("../../assets/images/AvatarDefault.jpg")}
                  />
                  <View style={styles.containerAddIcon}>
                    <AntDesign
                      style={styles.addIcon}
                      name="pluscircleo"
                      size={24}
                    />
                  </View>
                </View>
                <Ionicons
                  onPress={signOut}
                  style={styles.logoutIcon}
                  name="exit-outline"
                  size={24}
                  color="#BDBDBD"
                />
                <Text style={styles.mainText}>{nickName}</Text>
              </View>
            </View>

            <FlatList
              data={userPosts}
              keyExtractor={(item, index) => index.toString()}
              style={styles.flatList}
              renderItem={({ item }) => (
                <View>
                  <Image source={{ uri: item.photo }} style={styles.image} />
                  <Text style={styles.textPhoto}>{item.name}</Text>
                  <View // main wrapper Description
                    style={styles.wrapperMainDescription}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Feather // comments Icon
                        name="message-circle"
                        size={24}
                        color={item.comments ? "#FF6C00" : "#BDBDBD"}
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
                      <Text style={styles.textDescription}>
                        {item.comments}
                      </Text>
                      <SimpleLineIcons
                        style={styles.likeIcon}
                        name="like"
                        size={24}
                        color="#BDBDBD"
                      />
                      <Text style={styles.textDescription}>
                        0
                      </Text>
                    </View>

                    <View
                      style={{ flexDirection: "row" }} // map wrapper Description
                    >
                      <Feather
                        name="map-pin"
                        size={24}
                        color="#BDBDBD"
                        style={{ marginRight: 10 }}
                        onPress={() => navigation.navigate("Map", posts)}
                      />
                      <Text
                        style={{
                          ...styles.textDescription,
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
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBcg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    paddingTop: 77,
  },
  content: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 0,
  },
  containerAvatar: {
    width: 120,
    height: 120,
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
    position: "absolute",
    top: -60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.75,
    shadowRadius: 4,
    elevation: 4,
  },
  imageAvatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 16,
  },
  containerAddIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 14,
    right: -12,
    backgroundColor: "white",
    borderRadius: 100,
  },
  addIcon: { color: "#FF6C00" },
  logoutIcon: {
    bottom: 45,
    left: 170,
    position: "relative",
  },
  title: {
    backgroundColor: "red",
    position: "relative",
    paddingTop: 62,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 0,
  },
  mainText: {
    fontFamily: "Roboto-Medium",
    marginBottom: 32,
    color: "#212121",
    fontSize: 30,
    fontWeight: "500",
  },
  flatList: {
    maxHeight: 400,
    backgroundColor: "white",
    borderWidth: 0,
    paddingHorizontal: 16,
  },
  image: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
  },
  textPhoto: {
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 8,
  },
  wrapperMainDescription: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  likeIcon: {
    marginLeft: 24,
    marginRight: 10,
  },
  textDescription: {
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 8,
  },
});
