import { StyleSheet, Text, View, Alert, Image, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { getCartItems } from "../../services/cartServices";
import CartItem from "../../components/CartItem";

const Cart = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getCartItems()
      .then((res) => {
        setData(res.data);
        // Alert.alert("Success", JSON.stringify(res.data));
      })
      .catch((error) => {
        Alert.alert("Error", JSON.stringify(error));
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={{ padding: 10, alignItems: "center" }}>
        <Text>Loading.....</Text>
      </View>
    );
  }

  if (!loading && data.length === 0) {
    return (
      <View style={{ marginTop: 100, alignItems: "center" }}>
        <Image
          source={require("../../../assets/empty_cart.png")}
          resizeMode="contain"
          style={{ width: "100%" }}
        />
      </View>
    );
  }

  return (
    <View style={{ width: "100%" }}>
      <ScrollView>
        {data.map((item) => (
          <CartItem
            key={item.id}
            productId={item.product_id}
            cartId={item.id}
          />
        ))}
      </ScrollView>
      
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
