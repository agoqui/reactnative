import React, { Component } from "react";
import { StyleSheet, Switch } from "react-native";

export default class Kcheckbox extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.value !== this.props.value) return true;
    return false;
  }

  render() {
    // this.props.invisible = ["separateur", "ville_de_naissance"];

    return (
      <Switch
        key={this.props.key}
        style={{ width: 100, height: 40 }}
        invisible={this.props.invisible}
        onValueChange={this.props.onValueChange}
        value={this.props.value}
      />
    );
  }
}
