import { StyleSheet, Text, View, Alert } from "react-native";
import { useState, useEffect } from "react";
import { Avatar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { signOut } from "../services/authServices";
import { useNavigation } from "@react-navigation/native";
import { userDetail } from "../services/profileServices";

const ProfileCard = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    userDetail()
      .then((res) => {
        setUser(res.data);
        // Alert.alert("Success", JSON.stringify(res.data));
      })
      .catch((error) => {
        Alert.alert("Error", JSON.stringify(error.response));
      })
      .finally(() => setLoading(false));
  }, []);

  // handlers
  const signOutHandler = () => {
    Alert.alert("Confirm sign out", "Do you really want to sign out?", [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Signout cancelled."),
        style: "cancel",
      },
      {
        text: "Sign Out",
        onPress: () => {
          signOut()
            .then((res) => {
              navigation.replace("Login");
            })
            .catch((error) => {
              Alert.alert("Error", JSON.stringify(error.response));
            });
        },
      },
    ]);
  };

  if (loading) {
    return <View style={styles.card}></View>;
  }

  return (
    <View style={styles.card}>
      <View style={styles.contentBetween}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{user.name}</Text>
          <Text>{user.email}</Text>
        </View>
        <Avatar.Icon size={50} icon="account" />
      </View>
      <View
        style={{
          marginTop: 10,
          borderTopWidth: 1,
          borderTopColor: "gray",
          padding: 5,
          alignItems: "flex-end",
        }}
      >
        <MaterialCommunityIcons
          name="logout"
          size={32}
          color="#e49314"
          onPress={signOutHandler}
        />
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    margin: 5,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
  },

  contentBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
