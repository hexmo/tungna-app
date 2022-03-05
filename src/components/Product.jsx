import { StyleSheet, Dimensions } from "react-native";
import { Card, Subheading, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import GuitarImage from "../../assets/product-mock-images/guitar.jpg";

const productWidth = Dimensions.get("window").width * 0.4;

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
    <Card style={styles.card} onPress={handleClick}>
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
  card: {
    width: productWidth,
    marginRight: 10,
  },
  cardImage: {
    width: productWidth,
    height: productWidth,
  },
});
