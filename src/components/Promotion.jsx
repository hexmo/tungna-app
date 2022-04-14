import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Product from "./Product";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getHomeProductByCategory } from "../services/productServices";

const Promotion = ({ promoName }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const handleClick = () => {
    navigation.navigate("ProductsList", {
      key: promoName,
    });
  };

  useEffect(() => {
    getHomeProductByCategory(promoName)
      .then((res) => {
        setData(res.data);
        // Alert.alert("Success", JSON.stringify(res.data));
      })
      .catch((error) => {
        Alert.alert("Error", JSON.stringify(error.response));
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

  if (!loading && data.length == 0) {
    return <></>;
  }

  return (
    <View style={styles.promotion}>
      <Pressable onPress={handleClick}>
        <Text style={styles.promoName}>
          {promoName} <Feather name="arrow-right" size={18} color="black" />
        </Text>
      </Pressable>

      <ScrollView horizontal={true}>
        {data.map((item) => (
          <Product
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
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
