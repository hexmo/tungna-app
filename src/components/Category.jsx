import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Category = ({ name, image }) => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("ProductsList", {
      key: name,
    });
  };

  return (
    <Card style={styles.card} onPress={handleClick}>
      <Card.Cover source={image} resizeMode={"stretch"} />
    </Card>
  );
};

export default Category;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    marginBottom: 0,
    borderRadius: 20,
  },
});
