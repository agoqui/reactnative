import React, { Component } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

import Help from "./components/Help";
import Logo from "./components/Logo";
import Settings from "./core/Settings";
import Slide from "./components/Slide";
import Swiper from "react-native-swiper";
import Welcome from "./components/Welcome";

class StartHere extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Settings.color.main}
          barStyle="light-content"
          translucent={true}
        />
        <Swiper
          index={0}
          loop={false}
          showsPagination={false}
          showsButtons={true}
          buttonWrapperStyle={styles.buttonWrapper}
          prevButton={<Text style={styles.button}>‹</Text>}
          nextButton={<Text style={styles.button}>›</Text>}
        >
          <Welcome />
          {/* START HERE */}
          <Slide level={1}>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Logo red />
            </View>
          </Slide>
          <Slide level={2}>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "flex-end" }}
            >
              <Logo blue />
            </View>
          </Slide>
          <Slide level={3}>
            <View style={{ alignItems: "flex-end" }}>
              <Logo yellow />
            </View>
          </Slide>
          <Slide level={4}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start"
              }}
            >
              <Logo red />
              <Logo blue />
            </View>
          </Slide>
          <Slide level={5}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "center"
              }}
            >
              <Logo yellow />
              <Logo green />
            </View>
          </Slide>
          <Slide level={6}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-end"
              }}
            >
              <Logo red />
              <Logo blue />
              <Logo yellow />
            </View>
          </Slide>
          <Slide level={7}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Logo red />
              <Logo blue />
              <Logo yellow />
            </View>
          </Slide>
          <Slide level={8}>
            <View
              style={{
                flex: 1,
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Logo red />
              <Logo blue />
              <Logo yellow />
            </View>
          </Slide>
          <Slide level={9}>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-end"
              }}
            >
              <Logo red />
              <Logo blue />
              <Logo yellow />
            </View>
          </Slide>
          <Slide level={10}>
            <View
              style={{
                flex: 1,
                flexDirection: "column-reverse",
                alignItems: "flex-end",
                justifyContent: "flex-start"
              }}
            >
              <Logo red />
              <Logo blue />
              <Logo yellow />
            </View>
          </Slide>
          <Slide level={11}>
            <View
              style={{
                flex: 1,
                justifyContent: "space-between"
              }}
            >
              <Logo red />
              <Logo blue />
              <Logo yellow />
            </View>
          </Slide>
          <Slide level={12}>
            <View
              style={{
                flex: 1,
                flexDirection: "column-reverse",
                alignItems: "flex-end",
                justifyContent: "space-between"
              }}
            >
              <Logo red />
              <Logo blue />
              <Logo yellow />
            </View>
          </Slide>
          <Slide level={13}>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "space-around"
              }}
            >
              <Logo red />
              <Logo blue />
              <Logo yellow />
            </View>
          </Slide>
          <Slide level={14}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap"
              }}
            >
              <Logo red />
              <Logo blue />
              <Logo yellow />
              <Logo green />
              <Logo red />
              <Logo blue />
              <Logo yellow />
              <Logo green />
            </View>
          </Slide>
          <Slide level={15}>
            <View
              style={{
                flex: 1,
                flexDirection: "row-reverse",
                flexWrap: "wrap",
                justifyContent: "space-between"
              }}
            >
              <Logo red />
              <Logo blue />
              <Logo yellow />
              <Logo green />
              <Logo red />
              <Logo blue />
              <Logo yellow />
              <Logo green />
              <Logo red />
              <Logo blue />
            </View>
          </Slide>
          <Slide level={16}>
            <View
              style={{
                flex: 1,
                flexDirection: "row-reverse",
                justifyContent: "space-around"
              }}
            >
              <Logo red style={{ alignSelf: "flex-start" }} />
              <Logo blue style={{ alignSelf: "center" }} />
              <Logo yellow style={{ alignSelf: "flex-end" }} />
            </View>
          </Slide>
          {/* END HERE */}
        </Swiper>
        <Help />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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

export default StartHere;
