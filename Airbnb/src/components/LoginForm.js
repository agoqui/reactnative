import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";
import React, { Component } from "react";

export default class LoginForm extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          padding: 20
        }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/images/home.png")}
        />
        <Text style={[styles.title]}>Welcome</Text>
        <TextInput
          style={[styles.loginInput]}
          value={this.props.login}
          onChangeText={this.props.onChangeLogin}
        />
        <TextInput
          style={[styles.loginInput]}
          secureTextEntry={true}
          value={this.props.pwd}
          onChangeText={this.props.onChangePwd}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  loginInput: {
    height: 40,
    color: "white",
    fontSize: 20,
    padding: 10
  },
  title: {
    color: "white",
    fontSize: 50,
    margin: 20
  }
});
