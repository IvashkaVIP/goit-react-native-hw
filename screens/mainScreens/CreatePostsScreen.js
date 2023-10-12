import React, { useEffect, useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import ImagePicker from "react-native-image-picker";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const initialStatePhoto = {
  url: "",
  name: "",
  description: "",
  location: {
    latitude: null,
    longitude: null,
  },
};

export const CreatePostsScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const cameraRef = useRef(null);
  const navigation = useNavigation();
  const [statePhoto, setStatePhoto] = useState(initialStatePhoto);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const loadingImage = () => {
    console.log(ImagePicker);
    console.log(launchImageLibrary({mediaType: "photo"}));
    // const result = await ImagePicker.launchImageLibrary({mediaType: "mixed"})
    // console.log("loadingImage >>>>>>>>>>>>>  ", result);
  };

  // -----------------------------   checking Location Permission
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      //  let location = await Location.getCurrentPositionAsync({});
      //  setLocation(location);
    })();
  }, []);

  const takePhoto = async () => {
    const newUrl = (await cameraRef.current.takePictureAsync()).uri;
    const newLocation = await Location.getCurrentPositionAsync();

    setStatePhoto((prevState) => ({
      ...prevState,
      url: newUrl,
      location: {
        latitude: newLocation.coords.latitude,
        longitude: newLocation.coords.longitude,
      },
    }));
  };

  const publishPhoto = () => {
    if (statePhoto.url) navigation.navigate("Default", statePhoto);
  };

  const deletePhoto = () => {
    setStatePhoto(initialStatePhoto);
  };

  useEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: "none" },
      headerTitle: "Створити публікацію",
      headerTintColor: "#212121",
      headerTitleStyle: { fontSize: 17, fontFamily: "Roboto-Medium" },
      headerTitleAlign: "center",
      headerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: "gray",
      },

      headerLeft: (focused, size, color) => (
        <Feather
          style={{ marginLeft: 16 }}
          onPress={() => navigation.navigate("Default")}
          name="arrow-left"
          size={24}
          color="rgba(33, 33, 33, 0.8)"
        />
      ),
    });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        {/* --------------------------------------  блок камера  */}
        <Camera style={styles.camera} ref={cameraRef}>
          <TouchableOpacity onPress={takePhoto} style={styles.cameraBtn}>
            <FontAwesome name="camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </Camera>
        {/* ------------------------------------------------------- */}

        <View style={styles.textWrap}>
          <Text
            style={styles.textFoto}
            onPress={loadingImage}
          >
            Завантажте фото
          </Text>
          <TextInput
            style={styles.textTitle}
            placeholder="Назва..."
            placeholderTextColor="#BDBDBD"
            onSubmitEditing={(event) =>
              setStatePhoto((prevState) => ({
                ...prevState,
                name: event.nativeEvent.text,
              }))
            }
          />

          <View style={styles.textArea}>
            <TextInput
              style={{ ...styles.textTitle, paddingLeft: 25 }}
              placeholder="Місцевість..."
              placeholderTextColor="#BDBDBD"
              onSubmitEditing={(event) =>
                setStatePhoto((prevState) => ({
                  ...prevState,
                  description: event.nativeEvent.text,
                }))
              }
            />
            <Feather
              name="map-pin"
              size={20}
              color="#BDBDBD"
              style={{ position: "absolute", bottom: 10 }}
            />
          </View>

          <TouchableOpacity
            onPress={publishPhoto}
            activeOpacity={0.8}
            style={
              statePhoto.url
                ? { ...styles.publishBtn, backgroundColor: "#FF6C00" }
                : styles.publishBtn
            }
          >
            <Text
              style={
                statePhoto.url
                  ? { ...styles.textPublishBtn, color: "white" }
                  : styles.textPublishBtn
              }
            >
              Опубліковати
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={deletePhoto}
            style={
              statePhoto.url
                ? { ...styles.deleteBtn, backgroundColor: "#FF6C00" }
                : styles.deleteBtn
            }
          >
            <Feather
              name="trash-2"
              size={24}
              color={statePhoto.url ? "white" : "#BDBDBD"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  camera: {
    height: 267,
    width: "100%",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  cameraBtn: {
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: "white",
    opacity: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  textWrap: {
    width: "100%",
    justifyContent: "flex-start",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  textFoto: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 32,
  },
  textTitle: {
    color: "#212121",
    marginBottom: 16,
    height: 50,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#E8E8E8",
    fontSize: 16,
  },
  textArea: {
    position: "relative",
    height: 50,
    marginBottom: 32,
  },
  publishBtn: {
    marginBottom: 80,
    justifyContent: "center",
    alignItems: "center",
    height: 51,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
  },
  textPublishBtn: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  deleteBtn: {
    marginBottom: 34,
    width: 70,
    height: 40,
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
});

export default CreatePostsScreen;
