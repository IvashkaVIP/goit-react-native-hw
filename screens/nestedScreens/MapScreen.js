import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
       headerTitleAlign: "center",
    });
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={{
          flex: 1,
          initialRegion: {
            latitude: 50.1,
            longitude: 50.1,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          },
        }}
      >
        <Marker coordinate={{ latitude: 50, longitude: 50 }} />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
export default MapScreen;
