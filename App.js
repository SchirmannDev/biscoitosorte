import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class biscoitosorte extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
