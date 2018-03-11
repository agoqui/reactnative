import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Header from "./Header";

import Settings from "../core/Settings";

import Level1 from "./levels/Level1";
import Level2 from "./levels/Level2";
import Level3 from "./levels/Level3";
import Level4 from "./levels/Level4";
import Level5 from "./levels/Level5";
import Level6 from "./levels/Level6";
import Level7 from "./levels/Level7";
import Level8 from "./levels/Level8";
import Level9 from "./levels/Level9";
import Level10 from "./levels/Level10";
import Level11 from "./levels/Level11";
import Level12 from "./levels/Level12";
import Level13 from "./levels/Level13";
import Level14 from "./levels/Level14";
import Level15 from "./levels/Level15";
import Level16 from "./levels/Level16";

class Slide extends Component {
  _renderLevel(level) {
    switch (level) {
      case 1:
        return <Level1 />;
        break;
      case 2:
        return <Level2 />;
        break;
      case 3:
        return <Level3 />;
        break;
      case 4:
        return <Level4 />;
        break;
      case 5:
        return <Level5 />;
        break;
      case 6:
        return <Level6 />;
        break;
      case 7:
        return <Level7 />;
        break;
      case 8:
        return <Level8 />;
        break;
      case 9:
        return <Level9 />;
        break;
      case 10:
        return <Level10 />;
        break;
      case 11:
        return <Level11 />;
        break;
      case 12:
        return <Level12 />;
        break;
      case 13:
        return <Level13 />;
        break;
      case 14:
        return <Level14 />;
        break;
      case 15:
        return <Level15 />;
        break;
      case 16:
        return <Level16 />;
        break;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header level={this.props.level} />
        <View style={styles.wrapper}>
          {this._renderLevel(this.props.level)}
          <View style={styles.logos}>
            {this.props.children}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(53, 53, 53, 0.2)",
    marginBottom: 64
  },
  wrapper: {
    flex: 1,
    backgroundColor: "white",
    margin: 20
  },
  logos: {
    position: "absolute",
    width: "100%",
    height: "100%"
  }
});

export default Slide;
