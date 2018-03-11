import {
  ActivityIndicator,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import React, { Component } from "react";

import Kform from "../components/Kforms";
import { _ } from "lodash";

export default class App extends Component {
  state = {
    data: null,
    loaded: false
  };

  _renderFields = () => {
    if (this.state.data === null) return null;
    return <Kform form={this.state.data.form} />;
  };

  componentDidMount() {
    this.setState({
      data: require("../assets/data.json"),
      loaded: true
    });
  }

  render() {
    if (!this.state.loaded) {
      return (
        <ActivityIndicator
          size="large"
          color="#FF3C49"
          style={{
            flex: 1,
            justifyContent: "center"
          }}
        />
      );
    }
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Kizeo</Text>
        {this._renderFields()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
