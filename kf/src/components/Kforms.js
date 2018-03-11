import { Button, Platform, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

import Kfield from "../components/Kfield";
import { _ } from "lodash";

export default class Kform extends Component {
  state = {
    invisble: []
  };
  _renderFields() {
    let fields = [];
    _.forEach(this.props.form.fields, (element, key) => {
      if (!this.state.invisble[key]) {
        fields.push(
          <Kfield
            field={element}
            key={key}
            SetInvisible={() =>
              this.setState({ invisible: ["separateur", "ville_de_naissance"] })
            }
            onChangeKfield={value => this.setState({ [key]: value })}
            value={this.state[key]}
          />
        );
      }
    });
    return fields;
  }

  render() {
    return (
      <View>
        <Button
          onPress={() => console.log(this.state)}
          title="Envoyez!"
          color="#841584"
          accessibilityLabel="Envoyez vos datas!"
        />
        <Text>Formulaires</Text>
        {this._renderFields()}
      </View>
    );
  }
}
