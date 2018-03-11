import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Settings from "../../core/Settings";

import Target from "../Target";

class Level16 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Target red style={{ alignSelf: "flex-start" }} />
        <Target blue style={{ alignSelf: "center" }} />
        <Target yellow />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row-reverse",
    justifyContent: "space-around"
  }
});

export default Level16;
