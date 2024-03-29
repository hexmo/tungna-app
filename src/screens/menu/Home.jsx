import { StyleSheet, ScrollView, View } from "react-native";
import { Searchbar } from "react-native-paper";

import HomePageCarousel from "../../components/HomePageCarousel";
import Promotion from "../../components/Promotion";

export default function Home({ navigation }) {
  return (
    <View>
      <ScrollView style={styles.scroll}>
        <HomePageCarousel />
        <Promotion promoName={"Guitar"} />
        <Promotion promoName={"Drum"} />
        <Promotion promoName={"Piano & Keyboard"} />
        <Promotion promoName={"Ukulele"} />
        <Promotion promoName={"Wind pipes"} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {},
});
