import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Ksection extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.value !== this.props.value) return true;
    return false;
  }

  render() {
    return (
      <View style={{ backgroundColor: "#ACAACA", flex: 1, height: 40 }}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          {this.props.data.caption}
        </Text>
      </View>
    );
  }
}
