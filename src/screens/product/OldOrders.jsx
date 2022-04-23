import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import { useState, useEffect } from "react";
import { getOrders } from "../../services/cartServices";

const OldOrders = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getOrders()
      .then((res) => {
        // Alert.alert("Success", JSON.stringify(res.data));
        setData(res.data);
      })
      .catch((error) => {
        Alert.alert("Success", JSON.stringify(error.response));
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <ScrollView style={styles.main}>
        <Text style={styles.title}>Order History</Text>
        <Text style={{ textAlign: "center" }}>Loading..............</Text>
      </ScrollView>
    );
  }

  if (!loading && data.length === 0) {
    return (
      <ScrollView style={styles.main}>
        <Text style={styles.title}>Order History</Text>
        <Text style={{ textAlign: "center", marginTop: 200 }}>
          Yo do not have any order history.
        </Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.main}>
      <Text style={styles.title}>Order History</Text>
      {data.map((order) => (
        <Orders order={order} key={order.id} />
      ))}
    </ScrollView>
  );
};

export default OldOrders;

const Orders = ({ order }) => {
  return (
    <View style={styles.order}>
      <Text>
        <Text style={styles.boldText}>Location:</Text> {order.delivery_location}
      </Text>
      <Text>
        <Text style={styles.boldText}>Order Amount:</Text> Rs. {order.price}/-
      </Text>
      <Text style={styles.boldText}>Ordered Items:</Text>
      {order.description.split("!@").map((item, pos) => (
        <Text key={pos}>{item}</Text>
      ))}
      <Text>
        <Text style={styles.boldText}>Date:</Text>{" "}
        {order.created_at.slice(0, 10)}
      </Text>
      <Text>
        <Text style={styles.boldText}>Status:</Text>{" "}
        {order.status.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    margin: 5,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  order: {
    borderTopWidth: 1,
    borderTopColor: "black",
    margin: 5,
    padding: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
});
