import { StyleSheet, Dimensions } from "react-native";
import { Card, Subheading, Paragraph } from "react-native-paper";

import GuitarImage from "../../assets/product-mock-images/guitar.jpg";

const productWidth = Dimensions.get("window").width * 0.4;

const Product = () => {
  return (
    <Card style={styles.card}>
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
