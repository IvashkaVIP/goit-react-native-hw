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
  ActivityIndicator,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { getUserNick, getIsLoading } from "../../redux/auth/authSelectors";
import { setIsLoading } from "../../redux/auth/authSlice";
import { db } from "../../firebase/config";
import {
  addDoc,
  getDocs,
  collection,
  orderBy,
  serverTimestamp,
  query,
} from "firebase/firestore";

export default CommentsScreen = ({ route, navigation }) => {
  const { postId, imageUrl } = route.params;
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  // const intl = useIntl();
  const dispatch = useDispatch();
  const nickName = useSelector(getUserNick);
  const isLoading = useSelector(getIsLoading);

  const creatComment = async () => {
    try {
      const commentsCollection = collection(db, "posts", postId, "comments");
      await addDoc(commentsCollection, {
        comment,
        nickName,
        date: serverTimestamp(),
      });
      setComment("");
      getAllComments();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getAllComments = async () => {
    try {
      dispatch(setIsLoading({ isLoading: true }));
      const commentsRef = collection(db, "posts", postId, "comments");
      const commentsQuery = query(commentsRef, orderBy("date", "desc"));
      const snapshot = await getDocs(commentsQuery);

      const documents = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllComments(documents);
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      dispatch(setIsLoading({ isLoading: false }));
    }
  };

  useEffect(() => {
    navigation.setOptions(headerOfComments);
  }, []);

  useEffect(() => {
    getAllComments();
  }, [allComments.length]);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const formatDate = (timestamp) => {
    const dateObject = timestamp.toDate();
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1; 
    const year = dateObject.getFullYear();
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();a

    const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;
    return formattedDate;
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        {/* ----------------------------------------------------------CommentsList */}
        {isLoading ? (
          <ActivityIndicator
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            size="large"
            color="#0000ff"
          />
        ) : (
          <FlatList
            style={styles.flatListComments}
            data={allComments}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.wrapperComment}>
                <View style={styles.textWrapperComment}>
                  <Text style={styles.textComment}>{item.comment}</Text>
                  <Text style={styles.dateComment}>
                    {formatDate(item.date)}
                  </Text>
                </View>
                <View style={styles.avatarWrapperComment}>
                  <Image
                    style={styles.avatarComment}
                    source={require("../../assets/images/AvatarDefault.jpg")}
                  />
                </View>
              </View>
            )}
          />
        )}

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
              value={comment}
              onChangeText={setComment}
            />
            <TouchableOpacity style={styles.commentBtn}>
              <Feather
                name="arrow-up"
                size={24}
                color="#FFFFFF"
                onPress={() => {
                  Keyboard.dismiss();
                  creatComment();
                }}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const headerOfComments = {
  title: "Коментарі",
  headerTitleAlign: "center",
  headerStyle: {
    borderBottomWidth: 1,
    borderColor: "#BDBDBD",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  image: {
    width: 343,
    height: 240,
    marginBottom: 32,
    borderRadius: 8,
  },
  flatListComments: {
    width: "100%",
    flex: 1,
    marginBottom: 100,
  },
  wrapperComment: {
    flexDirection: "row",
    marginBottom: 24,
  },
  textWrapperComment: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0,0.03)",
    padding: 16,
  },
  avatarWrapperComment: {
    backgroundColor: "#BDBDBD",
    width: 28,
    height: 28,
    marginLeft: 16,
    borderRadius: 100,
  },
  avatarComment: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  textComment: {
    flex: 1,
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 13,
    lineHeight: 18,
  },
  dateComment: {
    fontSize: 10,
    color: "#BDBDBD",
    marginTop: 8,
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
