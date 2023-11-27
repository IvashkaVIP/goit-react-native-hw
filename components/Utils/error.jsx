import {
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState, useEffect } from "react";

export default function Error({ resetError, errorMessage }) {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      resetError();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <Text
          style={{
            flex: 1,
            padding: 16,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            marginLeft: -140,
            // marginTop: -50,
            width: 280,

            backgroundColor: "red",
            borderRadius: 25,
            color: "white",
            fontSize: 18,
            fontWeight: "600",
            textAlign: "center",
            textAlignVertical: "center",
          }}
        >
          {errorMessage}
          {"\n"}
          {"\n"} probably wrong login or password
          {"\n"}
          {"\n"} all fields must be filled in
        </Text>
      )}
    </>
  );
}
