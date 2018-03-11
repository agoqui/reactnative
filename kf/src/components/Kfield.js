import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React, { Component } from "react";

import Kcheckbox from "./fields/Kcheckbox";
import Kcode from "./fields/Kcode";
import Kmap from "./fields/Kmap";
import Ksection from "./fields/Ksection";
import Kselect from "./fields/Kselect";
import Ksignature from "./fields/Ksignature";
import Ktext from "./fields/Ktext";
import { _ } from "lodash";

export default class Kfield extends Component {
  _renderField() {
    switch (this.props.field.type) {
      case "section":
        return <Ksection data={this.props.field} />;
      case "map":
        return <Kmap data={this.props.field} />;
      case "signature":
        return (
          <View>
            <Text> {this.props.field.caption}</Text>
            <Ksignature data={this.props.field} />
          </View>
        );
      case "checkbox":
        return (
          <View>
            <Text> {this.props.field.caption}</Text>
            <Kcheckbox
              data={this.props.field}
              key={this.props.key}
              invisible={this.props.SetInvisible}
              onValueChange={this.props.onChangeKfield}
              value={this.props.value}
            />
          </View>
        );
      case "barcode":
        return (
          <Kcode
            data={this.props.field}
            key={this.props.key}
            invisible={this.props.SetInvisible}
            onValueChange={this.props.onChangeKfield}
            value={this.props.value}
          />
        );
      case "select":
        return (
          <View>
            <Text> {this.props.field.caption}</Text>
            <Kselect
              data={this.props.field}
              key={this.props.key}
              onValueChange={this.props.onChangeKfield}
              value={this.props.value}
            />
          </View>
        );
      default:
        return (
          <Ktext
            data={this.props.field}
            key={this.props.key}
            onChangeText={this.props.onChangeKfield}
            value={this.props.value}
          />
        );
    }
  }

  render() {
    if (this.props.field.visible_formula_json !== "") return <View />;
    return <View>{this._renderField()}</View>;
  }
}
