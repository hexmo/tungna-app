import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { Avatar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getProductById } from "../services/productServices";
import { removeProductFromCart } from "../services/cartServices";
import { useNavigation } from "@react-navigation/native";

const CartItem = ({ cartId, productId }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();

  useEffect(() => {
    getProductById(productId)
      .then((res) => {
        setProduct(res.data);
        // Alert.alert("Success", JSON.stringify(res.data));
      })
      .catch((error) => {
        // Alert.alert("Error", JSON.stringify(error.response));
      })
      .finally(() => setLoading(false));
  }, []);

  // handlers
  const removeProductFromCartHandler = () => {
    Alert.alert(
      "Confirmation Alert",
      "Do you really want to remove this item to cart?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            removeProductFromCart(cartId)
              .then((response) => {
                navigation.navigate("Home");
              })
              .catch((error) => {
                Alert.alert("Failure", "Please try again later.");
                // Alert.alert("Error", JSON.stringify(error.respose));
              });
          },
        },
      ]
    );
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
            {`${product.name.slice(0, 13)}....`}
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
