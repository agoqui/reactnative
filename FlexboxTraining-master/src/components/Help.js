import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import Settings from "../core/Settings";
import FlexBox from "../core/FlexBox";

class Help extends Component {
  state = {
    help: false
  };
  images = {
    flexDirection: require("../assets/flexbox/flexDirection.png"),
    justifyContent: require("../assets/flexbox/justifyContent.png"),
    flexWrap: require("../assets/flexbox/flexWrap.png"),
    alignSelf: require("../assets/flexbox/alignSelf.png"),
    alignItems: require("../assets/flexbox/alignItems.png"),
    alignContent: require("../assets/flexbox/alignContent.png")
  };
  _renderItem = ({ item }) => {
    console.log(item);
    return (
      <Text key={item.id}>
        {item.name}
      </Text>
    );
  };
  _getImage(item) {
    if (item.image) {
      return (
        <View
          style={{
            paddingHorizontal: 20,
            marginBottom: 20
          }}
        >
          <Image
            resizeMode="contain"
            style={{
              width: Settings.screen.width - 40,
              height:
                item.image.height *
                (Settings.screen.width - 40) /
                item.image.width
            }}
            source={this.images[item.name]}
          />
        </View>
      );
    }
  }
  _help() {
    return this.state.help
      ? <View style={styles.help}>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              height: 64,
              paddingTop: 10
            }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              {Platform.OS === "android" ? "HELP" : "🤔"}
            </Text>
          </View>
          <FlatList
            style={{
              width: "100%",
              backgroundColor: "white"
            }}
            data={FlexBox}
            renderItem={({ item }) => {
              return (
                <View key={item.key} style={styles.wrapper}>
                  <View style={styles.section}>
                    <Text style={styles.sectionText}>
                      {item.name}
                    </Text>
                  </View>
                  <View style={styles.item}>
                    <Text style={styles.itemText}>
                      {item.description}
                    </Text>
                  </View>
                  {this._getImage(item)}
                </View>
              );
            }}
          />
        </View>
      : null;
  }
  render() {
    return (
      <View
        style={[
          styles.container,
          {
            height: this.state.help ? Settings.screen.height : 64,
            marginTop: this.state.help ? null : Settings.screen.height - 64
          }
        ]}
      >
        {this._help()}
        <TouchableOpacity
          style={{
            width: "100%",
            height: 64,
            backgroundColor: Settings.color.main,
            alignItems: "center",
            justifyContent: "center"
          }}
          onPress={() => this.setState({ help: !this.state.help })}
        >
          <Text style={styles.buttonHelp}>
            {this.state.help ? "Hide" : "Show"} help
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
    width: "100%"
  },
  help: {
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
    paddingBottom: 64,
    backgroundColor: Settings.color.main
  },
  buttonHelp: {
    color: "white",
    fontSize: 18
  },
  wrapper: {},
  section: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Settings.color.darkGray,
    paddingHorizontal: 20
  },
  sectionText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  item: {
    paddingVertical: 20,
    justifyContent: "center",
    backgroundColor: "white",
    paddingHorizontal: 20
  },
  itemText: {
    color: Settings.color.darkGray,
    fontSize: 15
  }
});

export default Help;
