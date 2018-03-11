import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

import Event from "./Event";
import React from "react";

export default class Events extends React.Component {
  state = {
    events: []
  };

  _renderItem = ({ item }) => {
    return <Event data={item} />;
  };
  componentDidMount() {
    // Après le render
    // debugger;
    fetch(this.props.url)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        this.setState({
          events: responseJson
        });
      });
  }

  render() {
    return (
      <FlatList
        data={this.state.events}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => item.id}
      />
    );
  }
}
