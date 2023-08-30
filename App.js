import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import SVGImg from "./assets/images/add.svg";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/PhotoBG.jpg")}
        style={styles.image}
      >
        <View style={styles.content}>
          <View style={styles.avatar}>
            <SVGImg style={styles.add} />
          </View>
          <Text style={styles.text}>Реєстрація</Text>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
    borderBlockColor: "black",
    borderWidth: 1,
    // position: "relative",
    // bottom: 60,

    marginTop: -60,
    marginBottom: 32,

    justifyContent: "flex-end",
    alignItems: "flex-end",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.75,
    shadowRadius: 4,
    elevation: 4,
  },
  add: {
    width: 25,
    height: 25,

    position: "relative",
    bottom: 16,
    left: 12,
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 263,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    color: "#212121",
    fontSize: 30,
    fontWeight: "medium",
  },
});
