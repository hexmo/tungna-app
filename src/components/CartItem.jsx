import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { Avatar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getProductById } from "../services/productServices";

const CartItem = ({ cartId, productId }) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();

  useEffect(() => {
    getProductById(productId)
      .then((res) => {
        setProduct(res.data);
        Alert.alert("Success", JSON.stringify(res.data));
      })
      .catch((error) => {
        // Alert.alert("Error", JSON.stringify(error.response));
      })
      .finally(() => setLoading(false));
  }, []);

  const removeProductFromCartHandler = () => {
    console.log("Remove items pressed.");
  };

  if (loading) {
    return <></>;
  }

  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row" }}>
        <Avatar.Image size={60} source={{ uri: product.images[0] }} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 18 }} numberOfLines={1}>
            {product.name}
          </Text>
          <Text>Rs. {product.price}/-</Text>
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <MaterialCommunityIcons
          name="cart-remove"
          size={30}
          color="black"
          onPress={removeProductFromCartHandler}
        />
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    marginBottom: 0,
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
  },
});
