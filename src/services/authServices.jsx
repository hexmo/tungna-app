import axios from "./axiosInstance";
import { Alert } from "react-native";

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

export { login, signUp };
