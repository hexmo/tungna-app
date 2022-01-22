import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

export default function Home() {
  return (
    <View style={styles.home}>
      <Searchbar placeholder="Search" />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    marginTop: 10,
    marginHorizontal: 10,
  },
});
