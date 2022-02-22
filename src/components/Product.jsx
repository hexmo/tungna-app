import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const Product = () => {
  return (
    <View style={styles.product}>
      <Text>Product</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  product: {
    padding: 20,
  },
});
