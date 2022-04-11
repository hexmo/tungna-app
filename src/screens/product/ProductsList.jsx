import { StyleSheet, FlatList, View, Text, ScrollView } from "react-native";
import { useEffect } from "react";
import Product from "../../components/Product";
import react from "react";

const ProductsList = ({ navigation, route }) => {
  const { key } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: key });
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={({ item, index, separators }) => <Product />}
      numColumns={2}
    />
  );
};

export default ProductsList;

const styles = StyleSheet.create({});

const data = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 15 },
  { id: 16 },
  { id: 17 },
];
