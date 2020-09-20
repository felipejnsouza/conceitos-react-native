import axios from "axios";

const api = axios.create({
  baseURL: "http://172.18.90.130:3333",
  // baseURL: "http://localhost:3333",
});

export default api;
