import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

export const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Публікації</Text>
        <Ionicons
          style={styles.titleIcon}
          name="exit-outline"
          size={24}
          color="#BDBDBD"
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.wrapFooterElements}>
          <AntDesign
            style={styles.footerIconApp}
            name="appstore-o"
            size={24}
            color="#212121"
          />

          <TouchableOpacity style={styles.btn} activeOpacity={0.75}>
            <Feather name="plus" size={13} color="#ffffff" />
          </TouchableOpacity>

          <Feather name="user" size={24} color="#212121" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
  },
  header: {
    height: 88,
    position: "relative",
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    justifyContent: "flex-end",
    paddingBottom: 11,
  },
  titleText: {
    fontSize: 17,
    fontFamily: "Roboto-Medium",
    textAlign: "center",
  },
  titleIcon: {
    position: "absolute",
    right: 16,
    bottom: 10,
  },
  footer: {
    paddingTop: 9,
    height: 83,
    borderTopColor: "#BDBDBD",
    borderTopWidth: 1,
  },
  wrapFooterElements: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 44,
  },
  btn: {
    marginTop: 5,
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreatePostsScreen;