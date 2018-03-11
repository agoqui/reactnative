import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { Component } from "react";

import LoginForm from "../components/LoginForm";

export default class LoginScreen extends Component {
  state = {
    login: "arno@airbnb-api.com",
    pwd: "password01"
  };
  static navigationOptions = {
    title: "Login"
  };

  _loginOK = data => {
    const { navigate } = this.props.navigation;
    navigate("List", { data: data });
  };
  _onPressButton = () => {
    fetch("https://airbnb-api.now.sh/api/user/log_in", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.login,
        password: this.state.pwd
      })
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        // debugger;
        if (responseJson.error) {
          alert("Vous n'etes pas autorisée");
        } else {
          this._loginOK(responseJson);
        }
      });
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#FF3C49" }}>
        <LoginForm
          {...this.state}
          onChangeLogin={loginChild => {
            this.setState({ login: loginChild });
          }}
          onChangePwd={pwdChild => {
            this.setState({ pwd: pwdChild });
          }}
          onPress={onpressChild => {
            this._onPressButton;
          }}
        />
        <View
          style={{
            flex: 1,
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              width: 100,
              height: 50,
              padding: 20,
              borderColor: "white",
              borderRadius: 10,
              borderWidth: StyleSheet.hairlineWidth
            }}
            onPress={this._onPressButton}
          >
            <Text
              style={{
                fontSize: 15,
                color: "white"
              }}
            >
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
