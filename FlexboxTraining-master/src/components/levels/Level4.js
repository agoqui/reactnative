import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Settings from "../../core/Settings";

import Target from "../Target";

class Level4 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Target red />
        <Target blue />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  }
});

export default Level4;
