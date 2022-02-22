import { StyleSheet, ScrollView, View } from "react-native";
import { Searchbar } from "react-native-paper";

import HomePageCarousel from "../../components/HomePageCarousel";
import Promotion from "../../components/Promotion";

export default function Home() {
  return (
    <View>
      <Searchbar placeholder="Search" style={styles.searchBar} />
      <ScrollView style={styles.scroll}>
        <HomePageCarousel />
        <Promotion promoName={"Best Selling"} />
        <Promotion promoName={"Beginner Guitars"} />
        <Promotion promoName={"Guitars"} />
        <Promotion promoName={"Drumsets"} />
        <Promotion promoName={"Traditional Instruments"} />
        <Promotion promoName={"On sale"} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    marginBottom: 60,
  },
  searchBar: {
    margin: 10,
  },
});
