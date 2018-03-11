import { Image, StyleSheet, Text, View } from "react-native";

import React from "react";

class Event extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "#fffff0",
          height: 120,
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: "#000000"
        }}
      >
        <Text>
          {this.props.data.local_date} à {this.props.data.local_time}{" "}
        </Text>
        <Text style={{ fontSize: 20, alignItems: "center" }}>
          {this.props.data.name}
        </Text>
      </View>
    );
  }
}

export default Event;
