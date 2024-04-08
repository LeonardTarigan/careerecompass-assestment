import axios from "axios";

let baseURL;

if (process.env.NODE_ENV === "development") baseURL = "http://localhost:3000";
if (process.env.NODE_ENV === "production")
  baseURL = "https://dialink.vercel.app/";

const api = axios.create({
  baseURL: baseURL,
});

export default api;
