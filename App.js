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
        fontSize: 25,
        fontWeight: "bold",
        zIndex: 1,
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
  constructor(props) {
    super(props);
    this.state = { texto: "" };

    this.frases = [
      "Tocando a vida como toco violão. Eu não sei tocar violão.",
      "Sinta-se em casa, mas lembre que não esta.",
      "Se nem Jesus agradou todos, imagina eu",
      "A vida é uma sopa e eu estou de garfo.",
      "Cada pessoa devia cuidar da sua vida",
      "Infelizmente a função de agradar a todos não é minha.",
      "Que Jesus te guarde e esqueça onde.",
      "Os humilhados serão eliminados",
    ];
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
  }

  quebrarBiscoito() {
    let s = this.state;

    let r = Math.floor(Math.random() * this.frases.length);

    s.texto = this.frases[r];

    this.setState(s);
  }

  render() {
    return (
      <View style={styles.body}>
        <Image source={require("./images/avatar.jpg")} />
        <Text style={styles.texto}> "{this.state.texto}"</Text>
        <Botao
          color="#f7c2c5"
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
    backgroundColor: "#eb709f",
  },
  texto: {
    fontSize: 30,
    color: "#f7c2c5",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
});
