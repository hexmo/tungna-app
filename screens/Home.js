import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { SliderBox } from "react-native-image-slider-box";

import sliderImages from "../data/sliderImages";

export default function Home() {
  const [sliderImagesList] = useState(sliderImages);

  return (
    <View>
      <Searchbar placeholder="Search" style={styles.searchBar} />
      <SliderBox
        images={sliderImagesList}
        dotColor="#e49314"
        autoplay
        circleLoop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    margin: 10,
  },
});
