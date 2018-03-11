import { Button, Dimensions, Switch, TextInput } from "react-native";

import PropTypes from "prop-types";
import React from "react";

export default class CoursJ3 extends React.Component {
  static defaultProps = {
    counterValue: 0
  };

  // permet de typer les prop en dev
  static PropTypes = {
    counterValue: PropTypes.number.isRequired
  };

  renderTitle() {
    return (
      <Title>
        <Counter />
      </Title>
    );
  }
  // dans le composant Title , this.props.children permet de récupérer ce qu'il y a dans Title

  componentWillReceiveProps(nextProps) {
    // Executer quand le parent renvoie des props
    // Sert a declencher du code imperatif
  }

  componentWillUpdate() {
    // avant l'update
  }

  componentDidUpdate() {
    // après l'update
  }

  componentWillMount() {
    // declencher quan le composant n'est plus visible a l'ecran
  }

  // Permet de relancer ou pas le render de l'element
  // PureComponent ne fait que les objets en surface
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.title == this.props.title) {
      return false;
    }
    return true;

    const keys = Object.keys(nextProps);
    for (let i = 0; i < keys.length; i++) {
      if (nextProps[keys[i]] !== this.props[[key[i]]]) return true;
      return false;
    }
  }

  // largeur : Dimensions.get('window').width
  // hauteur : Dimensions.get('window').height
  // sinon utiliser react-native-responsive

  // LES FORMULAIRES

  render() {
    return (
      <View>
        <TextInput
          //multiline pour avoir plusieurs lignes
          style={{}}
          value={this.state.email}
          onChangeText={text => {
            this.setState({ email: text }, () => {
              //refresch ici le composant
            });
          }}
        />
        // ON ou Off
        <Switch
          value={this.state.isActive}
          onValueChange={val => {
            this.setState({ email: text }, () => {
              //refresch ici le composant
            });
          }}
        />
        <Button title="submit" onPress={() => {}} />
      </View>
    );
  }

  // LA NAVIGATION
  // reactnavigation
}

// Exo Airbnb
/*
1 react nactive init airbnb
2 Mettre ne place  la Navigation
3 Ecran Login
4 Ecran List
5 Ecran Room

*/
