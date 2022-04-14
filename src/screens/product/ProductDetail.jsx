import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import { SliderBox } from "react-native-image-slider-box";
import { Button, Subheading, Title, Paragraph } from "react-native-paper";
import { getProductById } from "../../services/productServices";

const ProductDetail = ({ navigation, route }) => {
  const { productId, name, price } = route.params;
  const deviceWidth = Dimensions.get("window").width;

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  useEffect(() => {
    getProductById(productId)
      .then((res) => {
        setProduct(res.data);
        // Alert.alert("Success", JSON.stringify(res.data));
      })
      .catch((error) => {
        Alert.alert("Error", JSON.stringify(error.response));
      })
      .finally(() => setLoading(false));
  }, []);

  const addToCartHandler = () => {
    Alert.alert("", "Do you really want to add this item to card?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  if (loading) {
    return <></>;
  }

  return (
    <>
      <ScrollView>
        <SliderBox
          images={product.images}
          dotColor="#e49314"
          circleLoop
          sliderBoxHeight={deviceWidth}
        />

        <View style={styles.detailsSection}>
          <Title>{name}</Title>
          <Subheading>Rs. {price}</Subheading>
          {/* https://stackoverflow.com/questions/38233789/react-native-view-auto-width-by-text-inside */}
          <View style={{ alignItems: "baseline" }}>
            <Text
              style={{
                marginVertical: 2,
                padding: 2,
                paddingHorizontal: 10,
                backgroundColor: "#111",
                color: "#fff",
                borderRadius: 4,
              }}
            >
              Brand: {product.brand.toUpperCase()}
            </Text>
          </View>
          {/* <Paragraph>{JSON.stringify(product)}</Paragraph> */}
          <Paragraph>{product.description}</Paragraph>
        </View>
      </ScrollView>
      <Button
        mode="contained"
        style={styles.button}
        onPress={addToCartHandler}
        icon="cart"
      >
        Add to cart
      </Button>
    </>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  detailsSection: {
    margin: 10,
  },
  button: {
    padding: 5,
    margin: 10,
    backgroundColor: "#e49314",
  },
});
