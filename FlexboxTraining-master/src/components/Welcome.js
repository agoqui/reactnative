import React, { Component } from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";

import Settings from "../core/Settings";

import Header from "./Header";

class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header>Welcome to Flexbox</Header>
        <ScrollView style={{ flex: 1, padding: 20 }}>
          <Text style={styles.text}>
            Now you've installed Flexbox Training App, open the file{" "}
            <Text style={styles.bold}>StartHere.js</Text> located in the{" "}
            <Text style={styles.bold}>src</Text> folder of your project. Scroll
            down the file and you'll find the comment{" "}
            <Text style={styles.bold}>START HERE</Text>.
          </Text>
          <Text style={styles.text}>
            Each <Text style={styles.code}>{`<Slide>`}</Text> you'll see is an
            exercise. You'll have to add style to the{" "}
            <Text style={styles.code}>{`<View>`}</Text> inside it, that contains
            one or more <Text style={styles.code}>{`<Logo>`}</Text> in order to
            match logos with square(s).
          </Text>
          <Text style={styles.text}>
            Don't forget to use property{" "}
            <Text style={styles.code}>Flex: 1</Text> that could sometimes be
            useful, but not always! Oh and open the developer menu then select{" "}
            <Text style={styles.bold}>HOT RELOADING</Text>. In case you need
            some help, click the <Text style={styles.bold}>Show help</Text>{" "}
            button, at the bottom.
          </Text>
          <Text style={styles.text}>
            So, ready to be a master of <Text style={styles.bold}>Flexbox</Text>?
            {Platform.OS === "android" ? " ;-)" : " 🤓"}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 20,
    lineHeight: 30
  },
  bold: {
    fontWeight: "bold"
  },
  code: {
    fontWeight: "bold"
  }
});

export default Welcome;
