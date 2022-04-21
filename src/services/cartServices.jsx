import axios from "./axiosInstance";

const addProductToCart = (id) =>
  axios.post("/cart_items", {
    product_id: id,
  });

const removeProductFromCart = (id) => axios.delete(`/cart_items/${id}`);

const getCartItems = () => axios.get(`/cart_items`);

const getCartPrice = () => axios.get("/cart_items_price");

const checkOutCart = (deliveryLocation) =>
  axios.post("/orders", {
    delivery_location: deliveryLocation,
  });

export {
  addProductToCart,
  removeProductFromCart,
  getCartItems,
  getCartPrice,
  checkOutCart,
};
