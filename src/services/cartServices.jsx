import axios from "./axiosInstance";

const addProductToCart = (id) =>
  axios.post("/cart_items", {
    product_id: id,
  });

const removeProductFromCart = (id) => axios.delete(`/cart_items/${id}`);

export { addProductToCart, removeProductFromCart };
