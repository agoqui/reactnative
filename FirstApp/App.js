import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <ScrollView
        style={{
          flexDirection: "column",
          backgroundColor: "#000"
        }}
      >
        <View style={[styles.mainTitle]}>
          <Text style={{ color: "green" }}>Chat noir, Chat blanc</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#3F3F3F",
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderColor: "white"
          }}
        >
          <Text style={[styles.title]}>Chat noir, Chat blanc (1998)</Text>
          <Text style={[styles.subTitle]}>2001: A space odysee</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderColor: "white"
          }}
        >
          <Image
            source={require("./img/chat.jpeg")}
            style={{ width: 140, height: 240 }}
          />
          <View style={{ flexDirection: "column", flex: 1 }}>
            <Text style={[styles.description]} numberOfLines={5}>
              Chat noir, chat blanc est un film yougoslave réalisé par Emir
              Kusturica, sorti en salles en 1998.Matko, un gitan vivant sur les
              rives du Danube, projette de détourner un train transportant de
              l’essence entre la Serbie et la Turquie. Il demande alors de
              l’argent à Grga, un parrain de la mafia locale, ancien ami de son
              père et s’associe à Dadan, un gangster cocaïnomane qui adore la
              musique techno. Mais Dadan en a décidé autrement et s’approprie le
              train et l’argent de Matko.
            </Text>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "white",
                borderRadius: 50,
                alignItems: "center",
                padding: 10,
                margin: 10
              }}
              onPress={() => alert("toto")}
              accessibilityLabel="Add to the watch List"
            >
              <Text style={{ color: "#841584", fontSize: 20 }}>
                + Add to watchList{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View>
            <Text>
              9 <Text>/10</Text>
            </Text>
          </View>
          <View>
            <Text>Metascore</Text>
          </View>
        </View>
        <ScrollView horizontal={true}>
          <Image
            source={require("./img/cast/ida.jpeg")}
            style={{ width: 120, height: 180 }}
          />
          <Image
            source={require("./img/cast/dado.jpeg")}
            style={{ width: 120, height: 180 }}
          />
          <Image
            source={require("./img/cast/grga.jpeg")}
            style={{ width: 120, height: 180 }}
          />
          <Image
            source={require("./img/cast/zare.jpeg")}
            style={{ width: 120, height: 180 }}
          />
          <Image
            source={require("./img/cast/zarije.jpeg")}
            style={{ width: 120, height: 180 }}
          />
        </ScrollView>
      </ScrollView>
    );
  }
}

var onPressAddWatchList;
var articleTitle = {
  color: "green"
};
var styles = StyleSheet.create({
  mainTitle: {
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  title: {
    fontSize: 40,
    color: "white",
    textAlign: "left",
    paddingLeft: 10,
    borderBottomWidth: StyleSheet.hairlineWidth
    //...articleTitle //destructuring: ajoute
  },
  subTitle: {
    fontSize: 20,
    color: "white"
  },
  description: {
    fontSize: 20,
    color: "white",
    flex: 1,
    padding: 10
  }
});
