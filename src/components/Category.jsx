import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-paper";

const Category = ({ name, image }) => {
  return (
    <Card style={styles.card}>
      <Card.Cover source={image} resizeMode={"stretch"} />
    </Card>
  );
};

export default Category;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    marginBottom: 0,
    borderRadius: 20,
  },
});
