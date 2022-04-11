import { StyleSheet, Dimensions } from "react-native";
import { Card, Subheading, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import GuitarImage from "../../assets/product-mock-images/guitar.jpg";

const productWidth = Dimensions.get("window").width * 0.48;

const Product = () => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("ProductDetail", {
      name: "Acoustic guitar",
      image: GuitarImage,
      price: 7600,
    });
  };

  return (
    <Card onPress={handleClick} style={{ width: productWidth, margin: 3 }}>
      <Card.Cover source={GuitarImage} style={styles.cardImage} />
      <Card.Content>
        <Subheading>Acoustic guitar</Subheading>
        <Paragraph>Rs. 7600</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default Product;

const styles = StyleSheet.create({
  cardImage: {
    // width: "100%",
  },
});
