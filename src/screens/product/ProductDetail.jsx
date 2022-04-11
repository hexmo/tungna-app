import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  Alert,
} from "react-native";

import { useEffect } from "react";
import { SliderBox } from "react-native-image-slider-box";

import { Button, Subheading, Title, Paragraph } from "react-native-paper";

const ProductDetail = ({ navigation, route }) => {
  const { name, image, price } = route.params;

  const deviceWidth = Dimensions.get("window").width;

  useEffect(() => {
    navigation.setOptions({ title: name });
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

  return (
    <>
      <ScrollView>
        <SliderBox
          images={[image, image, image]}
          dotColor="#e49314"
          circleLoop
          sliderBoxHeight={deviceWidth}
        />

        <View style={styles.detailsSection}>
          <Title>{name}</Title>
          <Subheading>Rs. {price}</Subheading>
          <Paragraph>
            {`
‣ Brand: Mantra
‣ Color: Natural
‣ Size:40 inch
‣ Back Material Type: Sapele
‣ Fretboard Material Type: Rosewood
‣ Neck Material Type: Sapele
‣ Top Material Type : Sape
        
It?s a basic guitar model which is inspired by the theory of karma. It means your action driven by intention which lead to future results.
            
This is the model which gives them the sense of starting with a clean heart to learn the guitar and if your karma is good then you will learn a lot. 
            
With good karma playing this guitar, good will come to you.
            
This is best guitar for the beginners who s planning to startthe guitar lesson and for students learning guitar.`}
          </Paragraph>
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
