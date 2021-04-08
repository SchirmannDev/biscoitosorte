import React, { Component } from "react";

import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";

class Botao extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.styles = StyleSheet.create({
      botao: {
        width: 250,
        height: 50,
        borderWidth: 2,
        borderColor: props.color,
        backgroundColor: "transparent",
        borderRadius: 25,
        margin: 10,
      },
      botaoArea: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      botaoText: {
        color: props.color,
        fontSize: 14,
        fontWeight: "bold",
      },
    });
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <View style={this.styles.botaoArea}>
          <Text style={this.styles.botaoText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class biscoitosorte extends Component {
  quebrarBiscoito() {
    alert("quebrou agora");
  }

  render() {
    return (
      <View style={styles.body}>
        <Image source={require("./images/cookie.png")} />

        <Botao
          color="#B59619"
          text="Quebre sua sorte"
          onPress={this.quebrarBiscoito}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
