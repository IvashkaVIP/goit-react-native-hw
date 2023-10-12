import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

export default CommentsScreen = ({ route, navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentComment, setCurrentComment] = useState("");
  
  useEffect(() => {
    navigation.setOptions({
      title: "Коментарі",
      headerTitleAlign: "center",
    });
  }, []);
  
  useEffect(() => {
    if (route.params) setPosts((prevState) => [...prevState, ...route.params]);
  }, [route.params]);

   const keyboardHide = () => {
     setIsShowKeyboard(false);
     Keyboard.dismiss();
   };

  console.log(" CommentsScreen posts[] >>>>>>>>>>>>>>>>>   ", posts);

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        {/* ----------------------------------------------------------PostsList */}
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 32 }}>
              <Image source={{ uri: item.url }} style={styles.image} />
            </View>
          )}
        />

        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={100}
          style={{ position: "absolute", left: 16, right: 16, bottom: 16 }}
        >
          <View style={{ marginBottom: 16 }}>
            <TextInput
              style={styles.commentInput}
              placeholder="Коментувати..."
              placeholderTextColor="#BDBDBD"
              value={currentComment}
              onChangeText={setCurrentComment}
            />
            <TouchableOpacity style={styles.commentBtn}>
              <Feather
                name="arrow-up"
                size={24}
                color="#FFFFFF"
                onPress={() => {
                  Keyboard.dismiss();
                  setCurrentComment("");
                }}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
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
  commentInput: {
    padding: 16,
    paddingRight: 58,
    position: "relative",
    height: 50,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
  },
  commentBtn: {
    position: "absolute",
    bottom: 8,
    right: 8,
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
  },
});
