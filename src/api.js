import axios from "axios";

const instance = axios.create({
  baseURL: "https://ecommercebackend-asdy.onrender.com/",
});

export default instance;
