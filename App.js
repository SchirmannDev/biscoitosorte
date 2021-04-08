import React, { Component } from "react";

import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

class Botao extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.styles = StyleSheet.create({
      botao: {
        width: 250,
        height: 50,
        borderWidth: 2,
        borderColor: "#ff0000",
        backgroundColor: "transparent",
      },
    });
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.botao}>
        <View>
          <Text>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class biscoitosorte extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Botao />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
  },
});
