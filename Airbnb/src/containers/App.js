/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Platform, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

import ListScreen from "./ListScreen";
import LoginScreen from "./LoginScreen";
import RoomScreen from "./RoomScreen";
import { StackNavigator } from "react-navigation";

const AirbnbApp = StackNavigator({
  Login: { screen: LoginScreen },
  List: { screen: ListScreen },
  Room: { screen: RoomScreen }
});
export default AirbnbApp;
