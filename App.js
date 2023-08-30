import { StatusBar } from "expo-status-bar";
import {
  Platform,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SVGImg from "./assets/images/add.svg";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/PhotoBG.jpg")}
        style={styles.image}
      >
        <View style={styles.content}>
          <View style={styles.title}>
            <View style={styles.avatar}>
              <SVGImg style={styles.add} />
            </View>
            <Text style={styles.text}>Реєстрація</Text>
          </View>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Логін"
              placeholderTextColor="#BDBDBD"
            />
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#BDBDBD"
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.password} activeOpacity={0.75}>
              <Text style={styles.showPassword}>Показати</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} activeOpacity={0.75}>
              <Text style={styles.textBtn}>Зареєструватися</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registration}>
              <Text style={styles.textRegistration} activeOpacity={0.75}>
                Вже є акаунт? Увійти
              </Text>
            </TouchableOpacity>
          </View>
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
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    // position: 'absolute',
    justifyContent: "flex-start",
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

    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    alignItems: "center",
  },
  text: {
    marginBottom: 32,
    color: "#212121",
    fontSize: 30,
    fontWeight: "500",
  },
  form: {
    flex: 1,
    marginHorizontal: 16,
  },
  input: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    height: 50,
    padding: 16,
    fontSize: 16,
  },
  password: {
    alignItems: "flex-end",
    marginTop: -52,
    marginRight: 16,
  },
  showPassword: {
    color: "#1B4371",
    fontSize: 16,
  },
  btn: {
    marginTop: 60,
    backgroundColor: "#FF6C00",
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  registration: {
    marginTop: 16,
    alignItems: "center",
  },
  textRegistration: {
    color: "#1B4371",
    fontSize: 16,
  },
});
