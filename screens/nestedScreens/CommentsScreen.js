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
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Ionicons, Feather } from "@expo/vector-icons";

const CommentsScreen = ({ route, navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "Коментарі",
      headerTitleAlign: "center",
    });
  }, []);

    return (
      <View style={styles.container}>
        <Text>CommentsScreen</Text>
      </View>
    );
}
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

export default CommentsScreen;
