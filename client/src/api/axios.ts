import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5173",
});

api.defaults.withCredentials = true;
export default api;
