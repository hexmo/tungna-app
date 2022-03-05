import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductsList = ({ navigation, route }) => {
  const { key } = route.params;

  navigation.setOptions({ title: key });

  return (
    <View>
      <Text>Products List</Text>
    </View>
  );
};

export default ProductsList;

const styles = StyleSheet.create({});
