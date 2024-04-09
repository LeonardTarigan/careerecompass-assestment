import axios from "axios";

let baseURL;

if (process.env.NODE_ENV === "development")
  baseURL = "http://localhost:3000/api";
if (process.env.NODE_ENV === "production")
  baseURL = "https://dialink.vercel.app/api";

const api = axios.create({
  baseURL: baseURL,
});

export default api;
