import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useEffect, useState } from "react";
import { getCartItems } from "../../services/cartServices";
import CartItem from "../../components/CartItem";
import { Button } from "react-native-paper";
import { getCartPrice } from "../../services/cartServices";
import { KhatiSdk } from "rn-all-nepal-payment";

const Cart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(0);
  const [deliveryLocation, setDeliveryLocation] = useState("");

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

    getCartPrice()
      .then((res) => {
        setPrice(res.data.price);
        // Alert.alert("Success", JSON.stringify(res.data));
      })
      .catch((error) => {
        Alert.alert("Error", JSON.stringify(error));
      })
      .finally(() => setLoading(false));
  }, []);

  // handlers
  const initiatePaymentHandler = () => {
    if (deliveryLocation === "") {
      Alert.alert("Validation error", "Delivery location can't be empty.");
      return;
    }

    if (deliveryLocation.length < 10) {
      Alert.alert(
        "Validation error",
        "Delivery location should be more than 10 characters long."
      );
      return;
    }

    setIsVisible(true);
  };

  const onPaymentComplete = (data) => {
    setIsVisible(false);
    const str = data.nativeEvent.data;
    const resp = JSON.parse(str);
    // console.log({ resp })
    if (resp.event === "CLOSED") {
      // handle closed action
    } else if (resp.event === "SUCCESS") {
      console.log({ data: resp.data });
    } else if (resp.event === "ERROR") {
      Alert.alert(
        "Payment Error",
        "Something went wrong please try again later."
      );
    }
    return;
  };

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
    <>
      <ScrollView>
        {data.map((item) => (
          <CartItem
            key={item.id}
            productId={item.product_id}
            cartId={item.id}
          />
        ))}
      </ScrollView>
      {price !== 0 ? (
        <SafeAreaView style={styles.checkoutCard}>
          <TextInput
            style={{ padding: 5 }}
            onChangeText={(location) => setDeliveryLocation(location)}
            value={deliveryLocation}
            placeholder="Enter delivery location..."
          />
          <Button
            mode="contained"
            style={styles.button}
            uppercase={false}
            inlineImageLeft="search_icon"
            onPress={initiatePaymentHandler}
          >
            Khalti Checkout | Rs. {price}
          </Button>
          <KhatiSdk
            amount={price * 100} // Number in paisa
            isVisible={isVisible} // Bool to show model
            paymentPreference={[
              // Array of services needed from Khalti
              "KHALTI",
            ]}
            productName={"Dragon"} // Name of product
            productIdentity={"1234567890"} // Unique product identifier at merchant
            onPaymentComplete={onPaymentComplete} // Callback from Khalti Web Sdk
            productUrl={"https://tungna.herokuapp.com/"} // Url of product
            publicKey={"test_public_key_564deace2b94422d9242353c4b270682"} // Test or live public key which identifies the merchant
          />
        </SafeAreaView>
      ) : (
        <></>
      )}
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5D2E8E",
    marginTop: 5,
  },
  checkoutCard: {
    backgroundColor: "#fff",
    padding: 15,
    paddingVertical: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
