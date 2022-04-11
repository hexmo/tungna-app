import { StyleSheet, FlatList, View, Text, Alert } from "react-native";
import { useEffect, useState } from "react";
import Product from "../../components/Product";
import { getProductByCategory } from "../../services/productServices";

const ProductsList = ({ navigation, route }) => {
  const { key } = route.params;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    navigation.setOptions({ title: key });
    getProductByCategory(key)
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

  return (
    <>
      {data.length == 0 ? (
        <View style={{ padding: 10, alignItems: "center" }}>
          <Text>No results found.</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item, index, separators }) => (
            <Product
              name={item.name}
              price={item.price}
              image={item.images[0]}
            />
          )}
          numColumns={2}
        />
      )}
    </>
  );
};

export default ProductsList;

const styles = StyleSheet.create({});
