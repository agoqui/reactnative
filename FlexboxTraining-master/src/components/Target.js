import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Settings from "../core/Settings";

class Logo extends Component {
  render() {
    const style = this.props.style || {};
    if (this.props.red) {
      return (
        <View
          style={[
            styles.container,
            { backgroundColor: Settings.color.red, ...style }
          ]}
        >
          <Image
            style={[styles.container, { ...style, opacity: 0.2 }]}
            source={require("../assets/logo/logo_red.png")}
          />
        </View>
      );
    } else if (this.props.blue) {
      return (
        <View
          style={[
            styles.container,
            { backgroundColor: Settings.color.blue, ...style }
          ]}
        >
          <Image
            style={[styles.container, { ...style, opacity: 0.2 }]}
            source={require("../assets/logo/logo_blue.png")}
          />
        </View>
      );
    } else if (this.props.yellow) {
      return (
        <View
          style={[
            styles.container,
            { backgroundColor: Settings.color.yellow, ...style }
          ]}
        >
          <Image
            style={[styles.container, { ...style, opacity: 0.2 }]}
            source={require("../assets/logo/logo_yellow.png")}
          />
        </View>
      );
    } else if (this.props.green) {
      return (
        <View
          style={[
            styles.container,
            { backgroundColor: Settings.color.green, ...style }
          ]}
        >
          <Image
            style={[styles.container, { ...style, opacity: 0.2 }]}
            source={require("../assets/logo/logo_green.png")}
          />
        </View>
      );
    } else {
      return (
        <View
          style={[
            styles.container,
            { backgroundColor: Settings.color.purple, ...style }
          ]}
        >
          <Image
            style={[styles.container, { ...style, opacity: 0.2 }]}
            source={require("../assets/logo/logo_purple.png")}
          />
        </View>
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
