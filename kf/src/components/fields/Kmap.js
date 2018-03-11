import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import MapView from "react-native-maps";

export default class Kmap extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.value !== this.props.value) return true;
    return false;
  }

  render() {
    return (
      <View>
        <Text>MAP</Text>
        <MapView
          style={{ width: "100%", height: "400" }}
          initialRegion={{
            latitude: 48.8564449,
            longitude: 2.4002913,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
      </View>
    );
  }
}
