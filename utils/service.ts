import axios from "axios";

const service = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3301" : "https://api.loelblog.com",
  timeout: 100000,
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return error;
  }
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  }
);

export default service;
