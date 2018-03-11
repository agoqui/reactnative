import {
  ActivityIndicator,
  Button,
  FlatList,
  InteractionManager,
  View
} from "react-native";
import React, { Component } from "react";

import ListHeader from "../components/list/ListHeader";
import RoomList from "../components/list/RoomList";

export default class ListScreen extends Component {
  state = {
    token: this.props.nav,
    rooms: [],
    loaded: false
  };
  static navigationOptions = ({ navigation }) => ({
    title: "Login"
  });

  componentDidMount() {
    fetch("https://airbnb-api.now.sh/api/room?city=paris")
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        this.setState({
          rooms: responseJson.rooms,
          loaded: true
        });
      });
  }
  _renderItem = ({ item }) => {
    return <RoomList data={item} onLongPress={id => this._openRoom(id)} />;
  };
  _openRoom = id => {
    const { navigate } = this.props.navigation;
    navigate("Room", { roomid: id });
  };

  render() {
    let data = this.props.navigation.state.params.data;
    const { goBack } = this.props.navigation;
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
      <View style={{ flex: 1, backgroundColor: "#FF3C49" }}>
        <FlatList
          data={this.state.rooms}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => item.shortId}
        />
        <ListHeader
          userName={data.account.username}
          uriUser={data.account.photos[0]}
        />
      </View>
    );
  }
}
