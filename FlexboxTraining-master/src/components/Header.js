import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Settings from "../core/Settings";

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.level ? `Level ${this.props.level}` : this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Settings.color.main,
    paddingTop: 10
  },
  button: {
    padding: 20
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  }
});

export default Header;
