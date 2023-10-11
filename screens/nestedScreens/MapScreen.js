import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route, navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
    });
  }, []);

  const latitude = route.params[0].location.latitude;
  const longitude = route.params[0].location.longitude;
  console.log(
    " MapScreen Location[] >>>>>>>>>>>>>>>>>   ",
    latitude,
    longitude
  );

  return (
    <View style={styles.container}>
      <MapView
        style={{
          flex: 1,
          initialRegion: {
            latitude,
            longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          },
        }}
      >
        <Marker
          coordinate={{
            latitude,
            longitude,
          }}
        />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MapScreen;
