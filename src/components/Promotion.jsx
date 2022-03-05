import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import Product from "./Product";
import { useNavigation } from "@react-navigation/native";

const Promotion = ({ promoName }) => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("ProductsList", {
      key: promoName,
    });
  };

  return (
    <View style={styles.promotion}>
      <Pressable onPress={handleClick}>
        <Text style={styles.promoName}>
          {promoName} <Feather name="arrow-right" size={18} color="black" />
        </Text>
      </Pressable>

      <ScrollView horizontal={true}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ScrollView>
    </View>
  );
};

export default Promotion;

const styles = StyleSheet.create({
  promotion: {
    margin: 10,
    marginRight: 0,
  },
  promoName: { fontSize: 20, marginBottom: 10 },
});
