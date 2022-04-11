import { useState } from "react";

import { SliderBox } from "react-native-image-slider-box";
import sliderImages from "../../data/sliderImages";

const HomePageCarousel = () => {
  const [sliderImagesList] = useState(sliderImages);

  return (
    <SliderBox
      images={sliderImagesList}
      dotColor="#e49314"
      autoplay
      circleLoop
    />
  );
};

export default HomePageCarousel;
