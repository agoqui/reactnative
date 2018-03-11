import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Settings from "../../core/Settings";

import Target from "../Target";

class Level3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Target yellow />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }
});

export default Level3;
