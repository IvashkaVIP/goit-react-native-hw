import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default MapScreen = ({ route, navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
    });
  }, []);

  const latitude = route.params[0].location.latitude;
  const longitude = route.params[0].location.longitude;

// const latitude = 37.78825;
// const longitude = -122.4324;

  console.log(
    " MapScreen Location[] >>>>>>>>>>>>>>>>>   ",
    latitude,
    longitude
  );

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
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
