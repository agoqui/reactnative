import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";

export default class Ktext extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.value !== this.props.value) return true;
    return false;
  }

  render() {
    return (
      <TextInput
        style={{}}
        key={this.props.key}
        style={{ height: 40 }}
        onChangeText={this.props.onChangeText}
        value={this.props.value}
        placeholder={this.props.data.caption}
      />
    );
  }
}
