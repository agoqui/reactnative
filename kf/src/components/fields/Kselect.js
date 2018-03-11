import { Picker, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

import _ from "lodash";

export default class Kselect extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.value !== this.props.value) return true;
    return false;
  }
  _renderSelect() {
    let items = [];
    _.forEach(_.split(this.props.data.items, ";"), v => {
      let s = _.split(v, ":");
      items.push(<Picker.Item key={s[0]} label={s[1]} value={s[0]} />);
    });
    return items;
  }
  render() {
    return (
      <Picker
        onValueChange={this.props.onValueChange}
        selectedValue={this.props.value}
      >
        {this._renderSelect()}
      </Picker>
    );
  }
}
