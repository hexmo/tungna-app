import axios from "./axiosInstance";

const login = (email, password) =>
  axios.post("/auth/sign_in", {
    email: email,
    password: password,
  });

const signUp = (name, email, password) =>
  axios.post("/auth/", {
    name: name,
    email: email,
    password: password,
    password_confirmation: password,
  });

const signOut = () => axios.delete("/auth/sign_out");

const isLoggedIn = () => axios.get("/auth/validate_token");

export { login, signUp, isLoggedIn, signOut };
