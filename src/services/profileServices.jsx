import axios from "./axiosInstance";

const userDetail = () => axios.get("/user_detail");

export { userDetail };
