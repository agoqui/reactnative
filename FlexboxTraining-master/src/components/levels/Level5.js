import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Settings from "../../core/Settings";

import Target from "../Target";

class Level5 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Target yellow />
        <Target green />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default Level5;
