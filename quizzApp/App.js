import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";
import React, { Component } from "react";

class Reponse extends Component {
  render() {
    if (this.props.arepondu === false) {
      return <View />;
    }

    if (this.props.bonnereponse) {
      return (
        <View>
          <Text>BRAVO! tu as trouvé la bonne réponse</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text>Dommage! tu n'as pas trouvé la bonne réponse </Text>
        </View>
      );
    }
  }
}
export default class App extends Component {
  state = {
    question1: "",
    reponse1: "gris",
    bonnereponse1: false,
    arepondu: false
  };
  _onPressButton = () => {
    this.setState({ arepondu: true });
    if (this.state.question1.toLowerCase().indexOf("gris") > -1) {
      this.setState({ bonnereponse1: true });
    } else {
      this.setState({ bonnereponse1: false });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Le quizz pour les nuls!</Text>
        <Text style={styles.instructions}>
          Quel est la couleur du cheval blanc d'Henry 4?
        </Text>
        <TextInput
          style={{
            height: 40,
            width: 200,
            borderColor: "gray",
            borderWidth: 1
          }}
          onChangeText={repo => this.setState({ question1: repo })}
          value={this.state.question1}
        />
        <TouchableHighlight
          style={{
            height: 50,
            width: 200,
            borderColor: "orange",
            borderWidth: 2,
            borderRadius: 20,
            backgroundColor: "blue",
            alignItems: "center",
            margin: 20
          }}
          onPress={this._onPressButton}
        >
          <Text style={{ color: "white", fontSize: 30 }}>Jouez!</Text>
        </TouchableHighlight>
        <Reponse
          bonnereponse={this.state.bonnereponse1}
          arepondu={this.state.arepondu}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
