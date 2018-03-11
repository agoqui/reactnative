import * as React from "react";

import { Dimensions, StyleSheet, View } from "react-native";
import { SceneMap, TabBar, TabViewAnimated } from "react-native-tab-view";

import Events from "../components/Events";
import Group from "../components/Group";

const url =
  "https://api.meetup.com/meetup-group-rIqaUAvH?&sign=true&photo-host=public&key=5c84e557fb3e4970643a15094d26";
const urlEvents =
  "https://api.meetup.com/meetup-group-rIqaUAvH/events?&sign=true&photo-host=public&key=5c84e557fb3e4970643a15094d26";
const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};
const FirstRoute = () => (
  <Group url={url} style={[styles.container, { backgroundColor: "#ff4081" }]} />
);
const SecondRoute = () => (
  <Events
    url={urlEvents}
    style={[styles.container, { backgroundColor: "#673ab7" }]}
  />
);

export default class App extends React.Component {
  state = {
    index: 0,

    routes: [
      { key: "first", title: "Groupe" },
      { key: "second", title: "Evenements" }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
