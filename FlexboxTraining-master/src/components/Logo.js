import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Settings from "../core/Settings";

class Logo extends Component {
  render() {
    const style = this.props.style || {};
    if (this.props.red) {
      return (
        <Image
          style={[styles.container, { ...style }]}
          source={require("../assets/logo/logo_red.png")}
        />
      );
    } else if (this.props.blue) {
      return (
        <Image
          style={[styles.container, { ...style }]}
          source={require("../assets/logo/logo_blue.png")}
        />
      );
    } else if (this.props.yellow) {
      return (
        <Image
          style={[styles.container, { ...style }]}
          source={require("../assets/logo/logo_yellow.png")}
        />
      );
    } else if (this.props.green) {
      return (
        <Image
          style={[styles.container, { ...style }]}
          source={require("../assets/logo/logo_green.png")}
        />
      );
    } else {
      return (
        <Image
          style={[styles.container, { ...style }]}
          source={require("../assets/logo/logo_purple.png")}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    width: Settings.itemSize,
    height: Settings.itemSize
  }
});

export default Logo;
