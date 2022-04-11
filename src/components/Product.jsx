import { StyleSheet, Dimensions } from "react-native";
import { Card, Subheading, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import GuitarImage from "../../assets/product-mock-images/guitar.jpg";

const productWidth = Dimensions.get("window").width * 0.48;

const Product = ({ name, price, image }) => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("ProductDetail", {
      name: name,
      image: image,
      price: price,
    });
  };

  return (
    <Card onPress={handleClick} style={{ width: productWidth, margin: 3 }}>
      <Card.Cover
        source={{ uri: image }}
        style={styles.cardImage}
        resizeMode="cover"
      />
      <Card.Content>
        <Subheading>{name}</Subheading>
        <Paragraph>Rs. {price}</Paragraph>
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
