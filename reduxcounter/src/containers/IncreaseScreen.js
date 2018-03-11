import * as moviesActions from "../store/movies/actions";

import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";
import { connect } from "react-redux"; // bridge entre store et component

class Increase extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Increase"
          onPress={() => {
            this.props.dispatch(moviesActions.increaseMovies());
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

Increase.defaultProps = {};

Increase.propTypes = {};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Increase); // permet d'avoir le dispatch
