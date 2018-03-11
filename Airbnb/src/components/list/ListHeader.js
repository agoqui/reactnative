import { Button, Image, Text, View } from "react-native";
import React, { Component } from "react";

export default class ListHeader extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "center"
        }}
      >
        <Text style={{ flex: 1, fontSize: 15, padding: 10, color: "white" }}>
          Bienvenue {this.props.userName}
        </Text>
        <Image
          style={{ width: 50, height: 50, borderRadius: 100 }}
          source={{ uri: this.props.uriUser }}
        />
      </View>
    );
  }
}
