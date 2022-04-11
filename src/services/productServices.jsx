import axios from "./axiosInstance";

const getProductByCategory = (category) =>
  axios.get("/products", {
    params: {
      category: category,
    },
  });

const category = {
  guitar: "Guitar",
  drum: "Drum",
  piano: "Piano & Keyboard",
  ukulele: "Ukulele",
  wind_pipes: "Wind pipes",
  traditional: "Traditional Instruments",
  home_studio: "Home Studio",
};

export { getProductByCategory };
