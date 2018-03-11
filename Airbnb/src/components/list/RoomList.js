import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import React, { Component } from "react";

export default class RommList extends Component {
  state = {
    numberOfLines: 3
  };
  render() {
    return (
      <View style={[styles.roomList]}>
        <ScrollView horizontal={true}>
          {this.props.data.photos.map((photo, index) => {
            return (
              <Image
                key={index}
                style={{
                  borderColor: "white",
                  borderWidth: 10,
                  width: 300,
                  height: 200
                }}
                source={{ uri: photo }}
              />
            );
          })}
        </ScrollView>
        <Text style={{ fontSize: 20, color: "black" }}>
          {this.props.data.title}
        </Text>
        <Text
          style={{
            position: "absolute",
            backgroundColor: "#000000",
            color: "white",
            height: 60,
            width: 90,
            opacity: 0.8,
            top: 120,
            fontSize: 20,
            justifyContent: "center",
            padding: 10,
            margin: 20
          }}
        >
          {this.props.data.price} €
        </Text>
        <View style={[styles.desc]}>
          <Text
            style={{ flex: 1 }}
            numberOfLines={this.state.numberOfLines}
            onPress={() => {
              if (this.state.numberOfLines === 3)
                this.setState({ numberOfLines: 100 });
              else this.setState({ numberOfLines: 3 });
            }}
          >
            {this.props.data.description}
          </Text>
          <Image
            style={{
              borderColor: "white",
              borderRadius: 100,
              width: 60,
              height: 60
            }}
            source={{ uri: this.props.data.user.account.photos[0] }}
          />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  roomList: {
    flex: 1,
    backgroundColor: "white",
    borderBottomWidth: 2,
    borderBottomColor: "gray",
    padding: 10
  },
  desc: {
    flexDirection: "row"
  }
});
