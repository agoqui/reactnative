import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Settings from "../../core/Settings";

import Target from "../Target";

class Level15 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Target red />
        <Target blue />
        <Target yellow />
        <Target green />
        <Target red />
        <Target blue />
        <Target yellow />
        <Target green />
        <Target red />
        <Target blue />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
});

export default Level15;
