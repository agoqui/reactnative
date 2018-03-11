import { Image, StyleSheet, Text, View } from "react-native";

import React from "react";

export default class Group extends React.Component {
  state = {
    name: "",
    uriImage: "_",
    members: 0,
    categorie: "",
    description: ""
  };

  componentDidMount() {
    // Après le render
    fetch(this.props.url) //permet de faire des requetes http
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        this.setState({
          name: responseJson.name,
          description: responseJson.description,
          uriImage: responseJson.key_photo.highres_link,
          categorie: responseJson.category.sort_name,
          members: responseJson.members
        });
      });
  }

  render() {
    return (
      <View style={[styles.container]}>
        <View style={{ alignItems: "center" }}>
          <Text style={[styles.header]}>{this.state.name}</Text>
          <Image
            source={{
              uri: this.state.uriImage
            }}
            style={{ height: 120, width: 200 }}
          />
          <Text>{this.state.members}</Text>
          <Text>{this.state.category}</Text>
          <Text>{this.state.description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    fontSize: 20,
    fontWeight: "bold"
  },
  buttonWrapper: {
    backgroundColor: "transparent",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  button: {
    color: "white",
    fontSize: 40
  }
});
