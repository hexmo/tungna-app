import { StyleSheet, ScrollView, View } from "react-native";
import { Searchbar } from "react-native-paper";

import HomePageCarousel from "../../components/HomePageCarousel";

export default function Home() {
  return (
    <View>
      <Searchbar placeholder="Search" style={styles.searchBar} />
      <ScrollView>
        <HomePageCarousel />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    margin: 10,
  },
});
