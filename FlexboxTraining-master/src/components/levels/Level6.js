import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Settings from "../../core/Settings";

import Target from "../Target";

class Level6 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Target red />
        <Target blue />
        <Target yellow />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});

export default Level6;
